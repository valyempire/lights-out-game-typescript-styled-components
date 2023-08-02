/**
 * Defines the provider value
 * These values will be available to any children component that calls the hook
 */
import { useContext } from "react";

/**
 *  Imports the context
 */
import { context } from "./Context";

/**
 * Imports the provider
 */
import { GameProvider } from "./Provider";

/**
 * Defines the main hook
 *
 * - Returns the context / object
 * - To be used inside components
 */
const useGame = () => useContext(context);

export { useGame, GameProvider };
