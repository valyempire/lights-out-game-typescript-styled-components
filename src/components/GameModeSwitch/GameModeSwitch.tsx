import React from "react";
import { useGame } from "../../hooks";
/**
 * Import styles components
 */
import { Switch, Slider, Input, Container } from "./GameModeSwitch.styled";

/**
 * Imports types
 */

export const GameModeSwitch: React.FC = () => {
  const { gameMode, changeGameMode } = useGame();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeGameMode(e.target.checked);
  };

  return (
    <Container>
      <Switch>
        <Input
          type="checkbox"
          checked={gameMode === "lights-on"}
          onChange={handleChange}
        />

        <Slider className="slider" />
      </Switch>
    </Container>
  );
};
