/**
 * Imports font awesome
 */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Imports styled components
 */
import { Container, IconContainer } from "./BoardCell.styles";

/**
 * Imports types
 */
import { BoardCellProps } from "./BoardCell.types";

export const BoardCell: React.FC<BoardCellProps> = (props) => {
  const { cell } = props;
  const { active, positionX, positionY } = cell;
  const { hints, moves, gridSize, board, toggleCellsAround } = useGame();

  // Initialize the helperOn state to false
  const { helperOn } = useGame();

  const handleClick = () => {
    toggleCellsAround(cell, board);
  };
  const getHintStatus = () => {
    if (moves.length >= hints.length) return false;
    const [x, y] = hints[moves.length];

    return x === positionX && y === positionY;
  };

  return (
    <Container
      gridSize={gridSize}
      active={active}
      onClick={handleClick}
      isHint={getHintStatus()}
    >
      {/* Show the toggle button */}

      {/* Conditionally show the hint icon based on the helperOn state */}
      {helperOn && getHintStatus() && (
        <IconContainer>
          <FontAwesomeIcon icon={faStar} />
        </IconContainer>
      )}
    </Container>
  );
};
