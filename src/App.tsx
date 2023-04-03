/**
 * Imports components
 */
import { GameController } from "./components/GameController";
import { GameProvider } from "./hooks";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <GameProvider>
      <GameController />
    </GameProvider>
  );
};
