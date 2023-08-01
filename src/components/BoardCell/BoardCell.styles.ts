/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * imports types
 */
import { ContainerProps } from "./BoardCell.types";

/**
 * Styles the container
 */
export const Container = styled("div", {
  shouldForwardProp: (propName) =>
    propName !== "active" && propName !== "gridSize" && propName !== "isHint",
})<ContainerProps>((props) => {
  const { active, gridSize } = props;

  const getSize = () => {
    if (gridSize > 5) return 30;
    if (gridSize > 3) return 35;
    return 50;
  };
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: getSize(),
    height: getSize(),
    backgroundColor: "#2633238",
    transition: "backgroundColor 0.3s ease ",
    border: "1px solid black",
    ...(active && {
      backgroundColor: "green",
    }),
  };
});

export const IconContainer = styled("div")(() => {
  return {
    color: "while",
    backgroundColor: "red",
  };
});
