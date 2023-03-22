import { NeonText } from "../NeonText";
import { Container } from "./Title.styled";

export const Title: React.FC = () => {
  return (
    <Container>
      <div>
        <input type={"checkbox"} />
      </div>
      <NeonText color="blue">Lights</NeonText>
      <NeonText color="orange">Out</NeonText>
    </Container>
  );
};
// color="orange" fontSize={120}
