import { AttackCaseSchema } from "../../@types";
import { useResultModal } from "../../hooks/useResultModal";
import InfoBox from "../commons/InfoBox";
import { Row } from "./Row";
import { TableBox } from "./TableBox";
import { Typographies } from "./Typographies";

export const Object = ({ attackCase }: { attackCase: AttackCaseSchema }) => {
  const { characters } = useResultModal(attackCase);
  return (
    <InfoBox title="Object" configs={{ boxWidth: "100%" }}>
      <TableBox>
        <Row title="Target" content1={attackCase.target} />
        <Row title="Type" content1={attackCase.type} />
        <Row title="Characters" content1={<Typographies textArray={characters} />} />
      </TableBox>
    </InfoBox>
  );
};
