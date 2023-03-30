import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { context, ProviderProps, ProviderValues } from "./Context";
import { Cell, GameMode } from "../../types";
import lodash from "lodash";

export const GameProvider: React.FC<ProviderProps> = (props) => {
  const { children } = props;
  const { Provider } = context;

  const [board, setBoard] = useState<Cell[][]>([]);

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

  /**
   * Handles the change of the grid size
   */
  const changeGridSize = (size: number) => {
    setGridSize(size);
    initializeBoard(size);
  };

  /**
   * Handles changing the game mode
   */
  const changeGameMode = (value: boolean) => {
    setGameMode(value ? "lights-on" : "lights-out");
  };
  /**
   * Handles the initialization of the board
   */
  const initializeBoard = (gridSize: number) => {
    const board: Cell[][] = [];

    for (let i = 0; i < gridSize; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < gridSize; j++) {
        row.push({
          active: Math.random() < 0.25,
          positionX: i,
          positionY: j,
        });
      }
      board.push(row);
    }

    setBoard(board);
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
    setWinner(winner);
    setNumClicks((prevNumClicks) => prevNumClicks + 1);
    // setMovesCount((prevState) => prevState + 1);
  };

  const handleResetGame = () => {
    setBoard([]);
    setWinner(false);
    initializeBoard(gridSize);
    setNumClicks(0);
  };

  /**
   * Handles the initialization of the board
   */
  useEffect(() => {
    initializeBoard(gridSize);

    // eslint-disable-next-line
  }, []);
  console.log(board);
  const providerValue: ProviderValues = {
    board,
    gridSize,
    winner,
    gameMode,
    numClicks,
    timer,
    changeGridSize,
    changeGameMode,
    initializeBoard,
    toggleCellsAround,
    handleResetGame,
    setTimer,
    setBoard,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
