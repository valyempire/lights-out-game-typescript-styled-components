import { NeonBlue, NeonOrange } from "./NeonText.styled";
import { NeonLights } from "./NeonText.types";

export const NeonText: React.FC<NeonLights> = (props) => {
  const { children } = props;

  return <NeonBlue>{children}</NeonBlue>;
};
