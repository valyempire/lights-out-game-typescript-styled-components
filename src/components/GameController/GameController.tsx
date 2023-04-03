/**
 * Imports components
 */
import { Board } from "../Board";
import { GridSizeSelector } from "../GridSizeSelector";
import { Title } from "../Title";
import { GameReset } from "../GameReset";
import { GameTime } from "../GameTime/";
import { WinnerMessage } from "../WinnerMessage/WinnerMessage";
import { Timer } from "../Timer";

/**
 * imports styles
 */
import { Container } from "./GameController.styled";

/**
 * imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const GameController: React.FC = () => {
  const { board, winner, moves } = useGame();
  console.log(board);
  return (
    <div>
      <Title />
      <GameReset />
      <GameTime />
      <GridSizeSelector />
      <Board board={board} winner={winner} />
      <WinnerMessage />
      <Container>Number of Moves: {moves.length}</Container>
      <Timer />
    </div>
  );
};
