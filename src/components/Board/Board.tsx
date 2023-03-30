/**
 * Imports components
 */
import { useGame } from "../../hooks";
import { BoardRow } from "../BoardRow";

/**
 * Imports styled components
 */
import { Container } from "./Board.styles";

/**
 * Imports types
 */
import { BoardProps } from "./Board.types";
import { BoardP } from "./Board.types";
/**
 * Displays the component
 */
export const Board: React.FC<BoardP> = (props) => {
  const { board } = props;

  const renderBoard = () => {
    return board.map((row, key) => <BoardRow key={key} row={row} />);
  };

  return <Container>{renderBoard()}</Container>;
};
