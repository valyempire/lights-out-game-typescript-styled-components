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
import { GameHistory } from "../GameHistory";
import { Hints } from "../Hints";
import { GameRanking } from "../GameRanking";
/**
 * imports styles
 */

import {
  Container,
  GameHeaders,
  LeftTopSection,
} from "./GameController.styled";

/**
 * imports hooks
 */
import { useGame } from "../../hooks";
// import ShowModal from "../ShowModal/ShowModal";

/**
 * Displays the component
 */
export const GameController: React.FC = () => {
  const { board, winner, moves } = useGame();
  return (
    <div>
      <LeftTopSection>
        <GameHistory />
        <Hints />
        <GameRanking />
      </LeftTopSection>
      <Title />
      <GameHeaders className="vali">
        <GameReset />
        <GameTime />
      </GameHeaders>
      <GridSizeSelector />
      <Board board={board} winner={winner} />
      <WinnerMessage />
      <Container>Number of Moves: {moves.length}</Container>
      <Timer />
    </div>
  );
};
