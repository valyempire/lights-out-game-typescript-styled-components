/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 *  Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    display: "flex",
    maxWidth: "max-content",
    marginLeft: 30,
    border: "1px solid #fff",
    padding: 10,
    backgroundColor: "orange",
    flexDirection: "column",
    maxHeight: 300,
    overflow: "auto",
    overflowY: "scroll",
    flex: 1,
  };
});

/**
 *  Styles the History Stats
 */
export const HistoryTable = styled("div")(() => {
  return {
    // display: "flex",
    border: "1px solid #fff",
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
  };
});

/**
 *  Styles the Button
 */
export const ButtonDelete = styled("button")(() => {
  return {
    display: "flex",
    maxWidth: "max-content",
    padding: 10,
    backgroundColor: "#151a7a",
    color: "white",
    "&:hover": {
      backgroundColor: "red",
    },
  };
});

export const Date = styled("div")(() => {
  return {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    // backgroundColor: "#eee",
    padding: "0.5rem",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "left",
    top: 0,
    left: 0,
  };
});

export const Mode = styled("div")(() => {
  return {
    fontSize: "1rem",
    color: "white",
    marginBottom: "0.5rem",
  };
});

export const Moves = styled("div")(() => {
  return {
    border: "1px solid rgb(106, 90, 205)",
    backgroundColor: "white",
    color: "rgb(60, 60, 60)",
    padding: 10,
    fontSize: 15,
    textAlign: "center",
    borderRadius: 35,
  };
});

export const Time = styled("div")(() => {
  return {
    border: "1px solid rgb(106, 90, 205)",
    backgroundColor: "white",
    color: "rgb(60, 60, 60)",
    padding: 10,
    fontSize: 15,
    textAlign: "center",
    borderRadius: 35,
  };
});

export const GridSize = styled("div")(() => {
  return { padding: 10, fontSize: 15, textAlign: "center" };
});
