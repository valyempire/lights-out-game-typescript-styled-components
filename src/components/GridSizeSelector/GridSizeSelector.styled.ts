import { ButtonProps } from "./GridSizeSelector.types";

/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the container
 */
export const Container = styled("div")(() => {
  return {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    gap: 30,
  };
});

/**
 * Styles the Button
 */
export const Button = styled("button")<ButtonProps>((props) => {
  const { active } = props;
  return {
    textAlign: "center",
    justifyContent: "center",
    margin: 20,
    padding: 13,
    backgroundColor: "cornflowerblue",
    cursor: "pointer",
    borderRadius: 6,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",

    ...(active && {
      backgroundColor: "darkblue",
      color: "white",
    }),
  };
});
