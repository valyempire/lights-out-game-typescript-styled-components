/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 *  Styles the Container
 */
export const Button = styled("button")(() => {
  return {
    display: "inline-block",
    float: "left",
    padding: 10,
    backgroundColor: "#151a7a",
    color: "white",
    marginLeft: 10,
  };
});
