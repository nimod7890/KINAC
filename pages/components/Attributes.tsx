import { Grid, Stack, Button } from "@mui/material";
import { ReactNode } from "react";
import { AttributesSchema, AttackCaseSchema } from "../@types";
import { getAttributes, getCharacters } from "../utils";
import { InfoBox, Character } from ".";

export default function Attributes({
  attackCase,
  onAttributesChange,
}: {
  attackCase: AttackCaseSchema;
  onAttributesChange: (attributes: AttributesSchema) => void;
}) {
  const { attributes, device } = attackCase;

  return (
    <InfoBox title="Characteristic" configs={{ isBorderExist: true }}>
      <Grid container spacing={1} columns={{ xs: 3, sm: 6, md: 12 }}>
        {getAttributes(device).map((attribute, index) => (
          <Attribute key={`${attribute}-${index}`} attribute={attribute}>
            {getCharacters({
              device,
              attribute,
            }).map((character) => (
              <Character
                key={`${attribute}-${character.name}`}
                attribute={{ name: attribute, character }}
                onAttributesChange={onAttributesChange}
                attributes={attributes}
              />
            ))}
          </Attribute>
        ))}
      </Grid>
    </InfoBox>
  );
}

const Attribute = ({ attribute, children }: { attribute: string; children: ReactNode }) => {
  return (
    <Grid item xs={2} sm={4} md={4} sx={{ width: "max-content", minHeight: "120px" }}>
      <Stack spacing={2} sx={{ padding: "0 5px 20px 5px" }}>
        <Button sx={{ width: "100%" }} variant="contained">
          {attribute}
        </Button>
        <Stack spacing={1} sx={{ padding: "0 1rem" }}>
          {children}
        </Stack>
      </Stack>
    </Grid>
  );
};
