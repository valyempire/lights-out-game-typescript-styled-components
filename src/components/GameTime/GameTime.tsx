import { useEffect } from "react";
import { useStopWatch } from "../../hooks/useStopWatch";
import { GameTimeProps } from "./GameTime.types";
import { Container } from "./GameTime.styled";

export const GameTime: React.FC<GameTimeProps> = (props) => {
  const { gridSize, winner, setTimer } = props;
  const { minutes, seconds, reset } = useStopWatch();

  /**
   * Resets the timer when the game is won or the grid size changes
   */
  useEffect(() => {
    reset();
    // eslint-disable-next-line
  }, [gridSize, winner]);
  useEffect(() => {
    if (winner) {
      setTimer({ minutes, seconds });
    }
  }, [winner]);

  if (winner) return null;

  return (
    <Container>
      {"Time:"} {minutes}:{seconds < 10 ? "0" + seconds : seconds}
    </Container>
  );
};
