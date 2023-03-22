import { NeonText } from "../NeonText";
import { Container, Input } from "./Title.styled";

export const Title: React.FC = () => {
  return (
    <Container>
      <div>
        <Input type={"checkbox"} />
      </div>

      <NeonText color="blue">Lights</NeonText>
      <NeonText color="orange">Out</NeonText>
    </Container>
  );
};
// color="orange" fontSize={120}
