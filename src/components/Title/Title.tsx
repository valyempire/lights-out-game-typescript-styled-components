import { NeonText } from "../NeonText";
import { Container, Input } from "./Title.styled";
// import { TitleProps } from "./Title.types";
import { GameModeSwitch } from "../GameModeSwitch";
import { useGame } from "../../hooks";

export const Title: React.FC = () => {
  const { gameMode } = useGame();

  return (
    <Container>
      <NeonText color="orange">Lights</NeonText>
      <NeonText color="blue">
        {gameMode === "lights-out" ? "Out" : "On"}
      </NeonText>

      <GameModeSwitch />
    </Container>
  );
};
// color="orange" fontSize={120}
