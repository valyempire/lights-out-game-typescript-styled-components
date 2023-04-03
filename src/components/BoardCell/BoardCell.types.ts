/**
 * Imports types
 */
import { Cell } from "../../types";

/**
 * Defines the component props interface
 */
export interface BoardCellProps {
  cell: Cell;
  key: number;
}

export interface ContainerProps {
  active: boolean;
  gridSize: number;
  isHint: boolean;
}
