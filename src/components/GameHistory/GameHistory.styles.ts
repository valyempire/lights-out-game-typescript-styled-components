/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 *  Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    border: "1px solid #263238",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#073b7c",
    cursor: "pointer",
    marginLeft: 10,
    "& svg": {
      cursor: "pointer",
      fontSize: 30,
      color: "#fff",
    },

    "&:hover": {
      backgroundColor: "#00bfff",
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
