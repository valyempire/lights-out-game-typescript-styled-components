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
    alignItems: "space-between",
    margin: 40,
  };
});
