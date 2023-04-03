/**
 * Imports styles components
 */
import { Container } from "./Title.styled";

/**
 * Imports components
 */
import { GameModeSwitch } from "../GameModeSwitch";
import { NeonText } from "../NeonText";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
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
