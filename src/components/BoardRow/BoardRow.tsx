/**
 * Imports components
 */
import { BoardCell } from "../BoardCell";

/**
 * Imports styled components
 */
import { Container } from "./BoardRow.styles";

/**
 * Imports types
 */
import { BoardRowProps } from "./BoardRow.types";
import { useGame } from "../../hooks";
/**
 * Displays the component
 */
export const BoardRow: React.FC<BoardRowProps> = (props) => {
  const { row } = props;

  /**
   * Handles the rendering of the cells
   */
  const renderCells = () => {
    return row.map((cell, key) => <BoardCell key={key} cell={cell} />);
  };

  return <Container>{renderCells()}</Container>;
};
