import { Container } from "./NeonText.styled";
import { NeonTextProps } from "./NeonText.types";

export const NeonText: React.FC<NeonTextProps> = (props) => {
  const { children, color } = props;

  return <Container color={color}>{children}</Container>;
};
