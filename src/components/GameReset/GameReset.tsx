import React from "react";
import { useGame } from "../../hooks";
import { Container, Button } from "./GameReset.styled";

export const GameReset: React.FC = () => {
  const { handleResetGame } = useGame();

  return (
    <Container>
      <Button onClick={handleResetGame}>Play Again</Button>
    </Container>
  );
};
