/**
 * Imports types
 */
import { Cell } from "../../types";

/**
 * Defines the component props interface
 */
export interface BoardCellProps {
  cell: Cell;
  gridSize: number;
  board: Cell[][];
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
}

export interface ContainerProps {
  active: boolean;
  gridSize: number;
}
