import {
  Box,
  FormControlLabel,
  Grid,
  MenuItem,
  OutlinedInput,
  Radio,
  Select,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ReactNode, useEffect, useState } from "react";
import type {
  TypeSchema,
  TypesSchema,
  AttackCaseSchema,
  TargetSchema,
  AttributesSchema,
  AttributeSchema,
  DeviceSchema,
  DevicesSchema,
} from "./@types";
import {
  Available,
  No,
  Unavailable,
  Yes,
} from "./enum/characteristicValueEnum";
import { Hardware, Software } from "./enum/deviceEnum";
import { PathwaysSchema } from "./@types/pathway";
import { getAttributes, getCharacters, getPathways } from "./utils";

const width = "400px";
const initialAssetObject: AttackCaseSchema = {
  target: "S' Numerical Relay",
  type: "Class B.3",
  device: Hardware,
  attributes: [],
  pathways: [],
};

export default function Home() {
  const [assetObject, setAssetObject] =
    useState<AttackCaseSchema>(initialAssetObject);
  return (
    <Box sx={{ width: "100vw", backgroundColor: "#FFFFFF" }}>
      <Header />
      <Stack
        spacing={3}
        sx={{
          minHeight: "100%",
          padding: "100px",
        }}
      >
        <Stack direction="row">
          <TargetInputForm
            selectedTarget={assetObject.target}
            onTargetChange={(target) =>
              setAssetObject((asset) => ({ ...asset, target }))
            }
          />
          <TypeSelectForm
            selectedType={assetObject.type}
            onTypeChange={(type) =>
              setAssetObject((asset) => ({ ...asset, type }))
            }
          />
        </Stack>
        <DeviceRadioGroup
          selectedDevice={assetObject.device}
          onDeviceChange={(device) =>
            setAssetObject((asset) => ({
              ...asset,
              attributes: [],
              pathways: [],
              device,
            }))
          }
        />
        <AttributesMultiSelectBox
          device={assetObject.device}
          selectedAttributes={assetObject.attributes}
          onAttributesChange={(attributes) =>
            setAssetObject((asset) => ({ ...asset, attributes }))
          }
          onPathwaysChange={(pathways) =>
            setAssetObject((asset) => ({ ...asset, pathways }))
          }
        />
      </Stack>
      <Footer />
    </Box>
  );
}

const TargetInputForm = ({
  selectedTarget,
  onTargetChange,
}: {
  selectedTarget: TargetSchema;
  onTargetChange: (target: TargetSchema) => void;
}) => {
  return (
    <InfoBox title="Asset Name" configs={{ isBorderExist: false }}>
      <OutlinedInput
        value={selectedTarget}
        onChange={(e) => onTargetChange(e.target.value)}
      />
    </InfoBox>
  );
};

const TypeSelectForm = ({
  selectedType,
  onTypeChange,
}: {
  selectedType: TypeSchema;
  onTypeChange: (type: TypeSchema) => void;
}) => {
  const types: TypesSchema = [
    "Class A.1",
    "Class A.2",
    "Class A.3",
    "Class B.1",
    "Class B.2",
    "Class B.3",
    "Class C",
  ];
  return (
    <InfoBox title="Type" configs={{ isBorderExist: false }}>
      <Select
        value={selectedType}
        renderValue={(value) => value}
        input={<OutlinedInput id="class" />}
      >
        {types.map((type) => {
          return (
            <MenuItem key={type} onClick={() => onTypeChange(type)}>
              {type}
            </MenuItem>
          );
        })}
      </Select>
    </InfoBox>
  );
};

const DeviceRadioGroup = ({
  selectedDevice,
  onDeviceChange,
}: {
  selectedDevice: DeviceSchema;
  onDeviceChange: (device: DeviceSchema) => void;
}) => {
  const devices: DevicesSchema = [Hardware, Software];
  return (
    <InfoBox
      title="Device"
      configs={{
        isBorderExist: false,
        stackDirection: "row",
      }}
    >
      <Stack direction="row" spacing={1}>
        {devices.map((device) => {
          return (
            <FormControlLabel
              key={device}
              label={device}
              control={<Radio checked={selectedDevice === device} />}
              onClick={() => onDeviceChange(device)}
            />
          );
        })}
      </Stack>
    </InfoBox>
  );
};

type AttractiveListType = string[];
const AttributesMultiSelectBox = ({
  device,
  selectedAttributes,
  onAttributesChange,
}: {
  device: DeviceSchema;
  selectedAttributes: AttributesSchema;
  onAttributesChange: (attributes: AttributesSchema) => void;
  onPathwaysChange: (pathways: PathwaysSchema) => void;
}) => {
  const [temporarySelectedAttributes, setTemporarySelectedAttributes] =
    useState<AttractiveListType>([]);

  useEffect(() => {
    setTemporarySelectedAttributes([]);
  }, [device]);

  const handleClick = (attribute: string) => {
    isTemporarySelectedAttribute(attribute)
      ? temporaryDeleteAttribute(attribute)
      : temporarySelectAttribute(attribute);
  };

  function isTemporarySelectedAttribute(attribute: string): boolean {
    return !!temporarySelectedAttributes.find(
      (temporarySelectedAttribute) => temporarySelectedAttribute === attribute
    );
  }
  function temporarySelectAttribute(attribute: string) {
    if (isTemporarySelectedAttribute(attribute)) {
      return;
    }
    setTemporarySelectedAttributes([...temporarySelectedAttributes, attribute]);
  }
  function temporaryDeleteAttribute(attribute: string) {
    if (!isTemporarySelectedAttribute(attribute)) {
      return;
    }
    const newSelectedAttributes: AttractiveListType =
      temporarySelectedAttributes.filter(
        (selectedAttribute) => selectedAttribute !== attribute
      );
    setTemporarySelectedAttributes(newSelectedAttributes);
  }

  return (
    <InfoBox title="Characteristic">
      <Grid
        container
        spacing={1}
        columns={{ xs: 3, sm: 6, md: 12 }}
        sx={{ minWidth: "1200px" }}
      >
        {getAttributes(device).map((attribute, index) => (
          <Attribute
            key={`${attribute}-${index}`}
            attribute={attribute}
            onClick={handleClick}
            isTemporarySelectedAttribute={isTemporarySelectedAttribute}
          >
            {isTemporarySelectedAttribute(attribute) &&
              getCharacters({
                device,
                attribute,
              }).map((character) => (
                <Character
                  key={`${attribute}-${character.name}`}
                  attribute={{ name: attribute, character }}
                  onAttributesChange={onAttributesChange}
                  selectedAttributes={selectedAttributes}
                />
              ))}
          </Attribute>
        ))}
      </Grid>
    </InfoBox>
  );
};

const Attribute = ({
  attribute,
  children,
  onClick,
  isTemporarySelectedAttribute,
}: {
  attribute: string;
  children: ReactNode;
  onClick: (attribute: string) => void;
  isTemporarySelectedAttribute: (attribute: string) => boolean;
}) => {
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      sx={{ width: "max-content", minHeight: "120px" }}
    >
      <Stack spacing={1}>
        <Button
          sx={{ width: "100%" }}
          variant={
            isTemporarySelectedAttribute(attribute) ? "contained" : "outlined"
          }
          onClick={() => onClick(attribute)}
        >
          {attribute}
        </Button>
        {children}
      </Stack>
    </Grid>
  );
};

const Character = ({
  attribute,
  selectedAttributes,
  onAttributesChange,
}: {
  attribute: AttributeSchema;
  selectedAttributes: AttributesSchema;
  onAttributesChange: (attributes: AttributesSchema) => void;
}) => {
  const { name, character } = attribute;
  const onClickRadioButton = (attribute: AttributeSchema) => {
    if (!isSelectedAttribute(attribute)) {
      selectAttribute(attribute);
      return;
    }
    deleteAttribute({ attribute });
  };

  function isSelectedAttribute(attribute: AttributeSchema): boolean {
    return !!selectedAttributes.find(
      (selectedAttribute) =>
        JSON.stringify(selectedAttribute) === JSON.stringify(attribute)
    );
  }
  function findMatchingAttribute(
    attribute: AttributeSchema
  ): AttributeSchema | undefined {
    return selectedAttributes.find(
      (selectedAttribute) =>
        selectedAttribute.name === attribute.name &&
        selectedAttribute.character.name === attribute.character.name &&
        selectedAttribute.character.value !== attribute.character.value
    );
  }
  function selectAttribute(attribute: AttributeSchema) {
    const newSelectedAttributes: AttributesSchema = deleteAttribute({
      attribute: findMatchingAttribute(attribute),
      isReturnArray: true,
    }) as AttributesSchema;
    onAttributesChange([...newSelectedAttributes, attribute]);
  }
  function deleteAttribute({
    attribute,
    isReturnArray = false,
  }: {
    attribute: AttributeSchema | undefined;
    isReturnArray?: boolean;
  }) {
    if (!attribute) {
      return selectedAttributes;
    }
    const newSelectedAttributes: AttributesSchema = selectedAttributes.filter(
      (selectedAttribute) =>
        JSON.stringify(selectedAttribute) !== JSON.stringify(attribute)
    );
    if (isReturnArray) {
      return newSelectedAttributes;
    }
    onAttributesChange(newSelectedAttributes);
  }
  return (
    <Stack spacing={0}>
      <Typography color="gray" fontWeight={700}>
        {character.name}
      </Typography>
      <Stack direction="row" spacing={1}>
        {[Yes, No, Available, Unavailable].map((value) => {
          const selectedAttribute: AttributeSchema = {
            name,
            character: {
              name: character.name,
              pathways: getPathways({ character, value }),
              value,
            },
          };
          return (
            <FormControlLabel
              key={`${attribute}-${character.name}-${value}`}
              label={value}
              control={
                <Radio checked={isSelectedAttribute(selectedAttribute)} />
              }
              sx={{ color: "gray", fontSize: "12px" }}
              onClick={() => onClickRadioButton(selectedAttribute)}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

const InfoBox = ({
  title,
  configs = {},
  children,
}: {
  title?: string;
  configs?: {
    boxWidth?: string;
    isBorderExist?: boolean;
    stackDirection?: "row" | "column";
  };
  children: ReactNode;
}) => {
  const {
    isBorderExist = true,
    boxWidth = width,
    stackDirection = "column",
  } = configs;
  return (
    <Stack
      spacing={1}
      direction={stackDirection}
      sx={{
        width: boxWidth,
        border: isBorderExist ? "1px solid #808080" : "",
        padding: isBorderExist ? "1rem" : 0,
        borderRadius: "10px",
        justifyContent: `${stackDirection == "row" && "space-between"}`,
        alignItems: `${stackDirection === "row" && "center"}`,
        minWidth: "fit-content",
      }}
    >
      {title && (
        <Typography sx={{ fontSize: 18, fontWeight: 700 }} color="gray">
          {title}
        </Typography>
      )}

      {children}
    </Stack>
  );
};
