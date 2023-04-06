import { useState, useEffect } from "react";

/**
 * Imports hooks
 */
import useLocalStorage from "use-local-storage";
import { useGameUtils } from "../useGameUtils";

/**
 * Imports the context
 */
import { context, ProviderProps, ProviderValues } from "./Context";

/**
 * Imports types
 */
import { Cell, GameMode, GameHistoryItem } from "../../types";

/**
 * External imports
 */
import lodash from "lodash";

/**
 * Display GameProvider
 */
export const GameProvider: React.FC<ProviderProps> = (props) => {
  const { children } = props;

  const { Provider } = context;

  const [board, setBoard] = useState<Cell[][]>([]);

  const { createSolvableBoard, getUpdatedHints, checkForWinner } =
    useGameUtils();

  /**
   * Initializes the grid size
   */
  const [gridSize, setGridSize] = useLocalStorage("gridSize", 3);

  /**
   * Initializes the grid size
   */
  const [winner, setWinner] = useState(false);

  /**
   * Initializes game mode state
   */
  const [gameMode, setGameMode] = useState<GameMode>("lights-out");

  /**
   * Initializes moves state
   */
  const [numClicks, setNumClicks] = useState(0);

  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });

  const [isReset, setIsReset] = useState(false);

  const [hints, setHints] = useState<number[][]>([]);

  const [moves, setMoves] = useState<number[][]>([]);

  const [history, setHistory] = useLocalStorage<GameHistoryItem[]>(
    "History",
    []
  );

  const [helperOn, setHelperOn] = useState(false);

  /**
   * Handles the change of the grid size
   */
  const changeGridSize = (size: number) => {
    setGridSize(size);
    initializeBoard(size, gameMode);
    setMoves([]);
  };

  /**
   * Handles changing the game mode
   */
  const changeGameMode = (value: boolean) => {
    setGameMode(value ? "lights-on" : "lights-out");
  };

  /**
   * Handles the board initialization
   */
  const initializeBoard = (gridSize: number, gameMode: GameMode) => {
    const { board, clickedCells } = createSolvableBoard(gridSize, gameMode);

    setBoard(board);
    setHints(clickedCells);
  };

  /**
   * Handles toggling the cell at the top, left, bottom, and right of the cell and the cell itself
   */
  const toggleCellsAround = (cell: Cell, board: Cell[][]) => {
    const { positionX, positionY } = cell;

    const newBoard = lodash.cloneDeep(board);

    const toggleCell = (positionX: number, positionY: number) => {
      if (
        positionX >= 0 &&
        positionX < gridSize &&
        positionY >= 0 &&
        positionY < gridSize
      ) {
        newBoard[positionX][positionY] = {
          ...newBoard[positionX][positionY],
          active: !newBoard[positionX][positionY].active,
        };
      }
    };

    toggleCell(positionX, positionY);
    toggleCell(positionX, positionY - 1);
    toggleCell(positionX, positionY + 1);
    toggleCell(positionX - 1, positionY);
    toggleCell(positionX + 1, positionY);

    // const isWinner = checkForWinner(newBoard, gameMode);
    const allCells = newBoard.flat();

    const winner = allCells.every((cell) =>
      gameMode === "lights-out" ? !cell.active : cell.active
    );

    setBoard(newBoard);
    setWinner(checkForWinner(newBoard, gameMode));
    setMoves((prevState) => [...prevState, [positionX, positionY]]);
  };

  /**
   * Handle the delete history item button
   */
  const deleteHistoryItem = (index: number) => {
    setHistory((prevState) => {
      if (!prevState) return [];
      const newHistory = prevState.filter((_, i) => i !== index);
      return newHistory;
    });
  };

  /**
   * Handle the delete history buton
   */
  const clearHistory = () => {
    setHistory([]);
  };

  const handleResetGame = () => {
    setBoard([]);
    setWinner(false);
    initializeBoard(gridSize, gameMode);
    setNumClicks(0);
    setIsReset(true);
    setMoves([]);
  };

  const formatTimer = (timer: { minutes: number; seconds: number }) => {
    return `${timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}:${
      timer.seconds < 10 ? "0" + timer.seconds : timer.seconds
    }`;
  };

  useEffect(() => {
    if (timer.minutes > 0 || timer.seconds > 0)
      setHistory((prevState) => {
        if (!prevState) return [];
        return [
          ...prevState,
          {
            id: new Date().getTime(),
            mode: gameMode,
            gridSize,
            moves: moves.length,
            time: formatTimer(timer),
          },
        ];
      });
  }, [timer]);

  /**
   * Handles the initialization of the board
   */
  useEffect(() => {
    initializeBoard(gridSize, gameMode);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isReset) setIsReset(false);
  }, [isReset]);

  /**
   * Handles updating the hints
   */
  useEffect(() => {
    if (moves.length > 0 && hints.length > 0) {
      const updatedHints = getUpdatedHints(board, gameMode, moves, hints);
      setHints(updatedHints);
    }
    // eslint-disable-next-line
  }, [moves, hints]);

  const providerValue: ProviderValues = {
    board,
    gridSize,
    winner,
    gameMode,
    numClicks,
    timer,
    isReset,
    hints,
    moves,
    history,
    helperOn,
    changeGridSize,
    changeGameMode,
    initializeBoard,
    toggleCellsAround,
    handleResetGame,
    deleteHistoryItem,
    clearHistory,
    setTimer,
    setBoard,
    setHints,
    setMoves,
    setHelperOn,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
