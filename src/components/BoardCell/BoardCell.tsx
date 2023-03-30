import { useCallback } from "react";
import { useGame } from "../../hooks";

/**
 * Imports styled components
 */
import { Container } from "./BoardCell.styles";

/**
 * Imports types
 */
import { BoardCellProps } from "./BoardCell.types";

/**
 * Displays the component
 */
export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell } = props;
  const { gridSize, board, toggleCellsAround } = useGame();

  const { active, positionX, positionY } = cell;

  /**
   * Handle click on the cell
   */
  const handleClick = () => {
    toggleCellsAround(cell, board);
  };

  return (
    <Container gridSize={gridSize} active={active} onClick={handleClick}>
      <div>{positionX}</div>
      <div>{positionY}</div>
    </Container>
  );
};
