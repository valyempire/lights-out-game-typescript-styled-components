import { NeonText } from "../NeonText";
import { Container, Input } from "./Title.styled";
import { TitleProps } from "./Title.types";
import { GameModeSwitch } from "../GameModeSwitch";

export const Title: React.FC<TitleProps> = (props) => {
  const { gameMode, changeGameMode } = props;
  return (
    <Container>
      <NeonText color="orange">Lights</NeonText>
      <NeonText color="blue">
        {gameMode === "lights-out" ? "Out" : "On"}
      </NeonText>

      <GameModeSwitch gameMode={gameMode} changeGameMode={changeGameMode} />
    </Container>
  );
};
// color="orange" fontSize={120}
