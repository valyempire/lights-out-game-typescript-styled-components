/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color: "white",
    // margin: "1rem 0",
    border: "solid",
    padding: 11,
    borderRadius: 10,
    backgroundColor: "navy",
  };
});
