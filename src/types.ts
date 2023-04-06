/**
 * Defines the cell interface
 */
export interface Cell {
  active: boolean;
  positionX: number;
  positionY: number;
}

export type GameMode = "lights-out" | "lights-on";

/**
 * Defines the GameHistoryItem interface
 */
export interface GameHistoryItem {
  id: number | string;
  mode: GameMode;
  time: string;
  moves: number;
  gridSize: number;
}
