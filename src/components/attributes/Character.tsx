import { Typography, FormControlLabel, Stack, Radio } from "@mui/material";
import { AttributeSchema, AttributesSchema } from "../../@types";
import { Yes, No, Available, Unavailable } from "../../enums/characteristicValueEnum";
import { getPathwaysFromCharacter } from "../../utils";

export default function Character({
  attribute,
  attributes,
  onAttributesChange,
}: {
  attribute: AttributeSchema;
  attributes: AttributesSchema;
  onAttributesChange: (attributes: AttributesSchema) => void;
}) {
  const { name, character } = attribute;
  const onClickRadioButton = (attribute: AttributeSchema) => {
    if (!isSelectedAttribute(attribute)) {
      selectAttribute(attribute);
      return;
    }
    deleteAttribute({ attribute });
  };

  function isSelectedAttribute(attribute: AttributeSchema): boolean {
    return !!attributes.find(
      (selectedAttribute) => JSON.stringify(selectedAttribute) === JSON.stringify(attribute)
    );
  }
  function findMatchingAttribute(attribute: AttributeSchema): AttributeSchema | undefined {
    return attributes.find(
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
      return attributes;
    }
    const newSelectedAttributes: AttributesSchema = attributes.filter(
      (selectedAttribute) => JSON.stringify(selectedAttribute) !== JSON.stringify(attribute)
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
      <Stack direction="row" spacing={2}>
        {[Yes, No, Available, Unavailable].map((value) => {
          const selectedAttribute: AttributeSchema = {
            name,
            character: {
              name: character.name,
              pathways: getPathwaysFromCharacter({ character, value }),
              value,
            },
          };
          return (
            <FormControlLabel
              key={`${attribute}-${character.name}-${value}`}
              label={value}
              control={<Radio checked={isSelectedAttribute(selectedAttribute)} />}
              sx={{ color: "gray", fontSize: "12px" }}
              onClick={() => onClickRadioButton(selectedAttribute)}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
