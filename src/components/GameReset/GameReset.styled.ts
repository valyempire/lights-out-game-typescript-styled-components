/**
 * Imports styled
 */
import { styled } from "@mui/system";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    gap: 50,
    margin: "20px  0",
  };
});

export const Button = styled("button")(() => {
  return {
    padding: 11,
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "bold",
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    // margin: "1rem 0",
    border: "solid",
    borderRadius: 10,
    backgroundColor: "navy",
  };
});
