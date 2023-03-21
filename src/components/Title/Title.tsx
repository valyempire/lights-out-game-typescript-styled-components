import { TitleGame } from "./Title.styled";
import { NeonText } from "../NeonText";

export const Title: React.FC = () => {
  return (
    <NeonText>
      <TitleGame>Lights Out</TitleGame>
    </NeonText>
  );
};
