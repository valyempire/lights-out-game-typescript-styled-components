/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the container
 */
export const Container = styled("div")(() => {
  return {
    padding: 8,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "bold",
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    // margin: 16,
    marginTop: 20,
    border: "solid",
    borderRadius: 10,
    backgroundColor: "navy",
    marginRight: 15,
  };
});

export const GameHeaders = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 10,
  };
});
