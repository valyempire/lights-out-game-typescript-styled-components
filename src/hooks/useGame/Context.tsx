import { createContext } from "react";

/**
 * Imports types
 */
import { Cell, GameMode } from "../../types";

/**
 * Defines the ProviderProps interface
 */
export interface ProviderProps {
  children: React.ReactNode;
}

/**
 * Defines the ProviderValues interface
 */
export interface ProviderValues {
  board: Cell[][];
  gridSize: number;
  winner: boolean;
  gameMode: GameMode;
  numClicks: number;
  timer: {
    minutes: number;
    seconds: number;
  };
  isReset: boolean;
  hints: number[][];
  moves: number[][];
  changeGridSize: (newSize: number) => void;

  changeGameMode: (value: boolean) => void;

  initializeBoard: (gridSize: number, gameMode: GameMode) => void;

  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;

  setTimer: React.Dispatch<
    React.SetStateAction<{
      minutes: number;
      seconds: number;
    }>
  >;
  handleResetGame: () => void;
  setBoard: React.Dispatch<React.SetStateAction<Cell[][]>>;
  setHints: React.Dispatch<React.SetStateAction<number[][]>>;
  setMoves: React.Dispatch<React.SetStateAction<number[][]>>;
}

/**
 * Defines the default values
 */
export const defautValues: ProviderValues = {
  board: [],
  gridSize: 3,
  winner: false,
  gameMode: "lights-out",
  numClicks: 0,
  timer: {
    minutes: 0,
    seconds: 0,
  },
  isReset: false,
  moves: [],
  hints: [],
  changeGridSize: () => {},
  changeGameMode: () => {},
  initializeBoard: () => {},
  toggleCellsAround: () => {},
  handleResetGame: () => {},
  setTimer: () => {},
  setBoard: () => {},
  setHints: () => {},
  setMoves: () => {},
};
/**
 * Defines a context where the state is stored and shared
 */
export const context = createContext<ProviderValues>(defautValues);
