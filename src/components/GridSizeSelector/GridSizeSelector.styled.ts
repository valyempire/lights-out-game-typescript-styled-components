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
    margin: 40,
  };
});

export const Button = styled("button")(() => {
  return {
    textAlign: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
    borderColor: "strong",
    borderRadius: 6,
    fontSize: 16,
  };
});

export const Active = styled("div")(() => {
  return {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "space-between",
    margin: 40,
    backgroundColor: "red",
    color: "white",
  };
});

export const InActive = styled("div")(() => {
  return {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "space-between",
    margin: 40,
    backgroundColor: "orange",
    color: "white",
  };
});
