import React from "react";

/**
 * Imports components
 */
import { NeonText } from "../NeonText";

/**
 * Imports hooks
 */
import { useGame } from "../../hooks";

/**
 * Displays the component
 */
export const WinnerMessage: React.FC = () => {
  const { winner } = useGame();

  if (!winner) return null;

  return (
    <>
      <NeonText color="blue">Congrats :</NeonText>
      <NeonText color="orange">You Win </NeonText>
    </>
  );
};
