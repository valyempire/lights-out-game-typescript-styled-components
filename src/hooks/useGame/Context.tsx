import { createContext } from "react";
import { Cell, GameMode } from "../../types";

export interface ProviderProps {
  children: React.ReactNode;
}
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
  changeGridSize: (newSize: number) => void;

  changeGameMode: (value: boolean) => void;

  initializeBoard: (gridSize: number) => void;

  toggleCellsAround: (cell: Cell, board: Cell[][]) => void;

  setTimer: React.Dispatch<
    React.SetStateAction<{
      minutes: number;
      seconds: number;
    }>
  >;
  handleResetGame: () => void;
  setBoard: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

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
  changeGridSize: () => {},
  changeGameMode: () => {},
  initializeBoard: () => {},
  toggleCellsAround: () => {},
  handleResetGame: () => {},
  setTimer: () => {},
  setBoard: () => {},
};

export const context = createContext<ProviderValues>(defautValues);
