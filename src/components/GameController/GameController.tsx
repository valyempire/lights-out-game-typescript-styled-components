/**
 * Imports components
 */
import { Board } from "../Board";
import { GridSizeSelector } from "../GridSizeSelector";
import { Title } from "../Title";
import { GameReset } from "../GameReset";
import { GameTime } from "../GameTime/";

import { Container } from "./GameController.styled";
import { useGame } from "../../hooks";
/**
 * Imports styles
 */
import { NeonText } from "../NeonText";
/**
 * Displays the component
 */
export const GameController: React.FC = () => {
  const { board, winner, changeGridSize, gridSize, numClicks, timer } =
    useGame();
  console.log(board);
  return (
    <div>
      <Title />
      <GameReset />
      <GameTime />
      {!winner && (
        <GridSizeSelector
          changeGridSize={changeGridSize}
          activeSize={gridSize}
        />
      )}{" "}
      {!winner && <Board board={board} />}
      console.log(board)
      {winner && <NeonText color="orange">You Win</NeonText>}
      <Container>Number of Moves: {numClicks}</Container>
      {winner && (
        <Container>
          {" "}
          {"Time:"} {timer.minutes}:
          {timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}{" "}
        </Container>
      )}
    </div>
  );
};
