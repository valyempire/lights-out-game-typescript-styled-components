/**
 * Imports styles components
 */
import { Container } from "./NeonText.styled";

/**
 * Imports types
 */
import { NeonTextProps } from "./NeonText.types";

/**
 * Displays the component
 */
export const NeonText: React.FC<NeonTextProps> = (props) => {
  const { children, color } = props;

  return <Container color={color}>{children}</Container>;
};
