/**
 * Imports types
 */
import { Cell } from "../../types";

/**
 * Defines the component props interface
 */
export interface BoardProps {
  board: Cell[][];
  gridSize: number;
  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;
}

export interface BoardP {
  board: Cell[][];
}
