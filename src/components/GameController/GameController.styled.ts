/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the container
 */
export const Container = styled("div")(() => {
  return {
    padding: 20,
    cursor: "pointer",
    fontSize: 20,
    fontWeight: "bold",
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: "1rem 0",
    border: "solid",
    borderRadius: 10,
    backgroundColor: "navy",
    marginRight: 15,
  };
});
