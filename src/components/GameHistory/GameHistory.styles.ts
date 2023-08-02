/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 *  Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    display: "inline-block",
    float: "left",

    marginLeft: 30,
    padding: 10,
    backgroundColor: "#006b2d",
    "&:hover": {
      backgroundColor: "#00bfff", // Schimbăm culoarea de fundal la hover
      color: "#fff", // Schimbăm culoarea textului la hover
      cursor: "pointer",
    },
  };
});

/**
 *  Styles the Button
 */
export const Button = styled("button")(() => {
  return {
    display: "flex",
    maxWidth: "max-content",
    padding: 10,
    backgroundColor: "#151a7a",
    color: "white",
    marginBottom: 12,
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "red",
    },
  };
});

export const GameHistoryTitle = styled("button")(() => {
  return {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    maxWidth: "max-content",
    padding: 10,
    backgroundColor: "#151a7a",
    color: "white",
  };
});
