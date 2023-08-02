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
    margin: 10,
    // border: "1px solid #00bfff",
    padding: 10,
    backgroundColor: "#212121",
    flexDirection: "column",
    borderRadius: 5,
    color: "#fff",
    position: "relative",
    overflowY: "auto", // Adăugăm overflow-y pentru a adăuga bara de derulare
    maxHeight: "500px",
  };
});

/**
 *  Styles the History Stats
 */
export const HistoryTable = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    backgroundColor: "#263238",
    width: 430,
    height: 214,
    "@media (max-width: 768px)": {
      width: "auto",
      height: "auto",
    },
    "@media (max-width: 320px)": {
      width: "auto",
      height: "auto",
    },
  };
});

/**
 * Styles the Delete Container
 */
export const DeleteButton = styled("div")(() => {
  return {
    display: "flex",
    maxWidth: "max-content",
    backgroundColor: "#263238",
    color: "white",
    marginLeft: 23,
    marginBottom: 25,
    cursor: "pointer",
    "&:hover": {
      color: "white",
      "& svg": {
        color: "red",
        width: 30,
        height: 30,
      },
    },
  };
});

export const Date = styled("div")(() => {
  return {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00bfff",
    padding: "0.5rem",
  };
});

export const Mode = styled("div")(() => {
  return {
    fontSize: 17,
    color: "#00bfff",
    marginBottom: "0.5rem",
    marginTop: 5,
    marginRight: 13,
  };
});

export const Moves = styled("div")(() => {
  return {
    border: " 4px solid #00bfff",
    backgroundColor: "white",
    color: "#00005b",
    // padding: 10,
    fontSize: 17,
    textAlign: "center",
    borderRadius: 35,
    // marginLeft: 14,
    fontWeight: "bold",
    margin: "0 auto 0.5rem auto",
    width: "fit-content",
    padding: "0.5rem 1rem",
    marginBottom: 17,
  };
});

export const Time = styled("div")(() => {
  return {
    border: " 4px solid #00bfff",
    backgroundColor: "white",
    color: "#00005b",
    // padding: 18,
    fontSize: 17,
    textAlign: "center",
    borderRadius: 35,
    fontWeight: "bold",
    margin: "0 auto",
    width: "fit-content",
    padding: "0.5rem 1.5rem",
  };
});

export const GridSize = styled("div")(() => {
  return {
    padding: 10,
    fontSize: 17,
    color: "#00bfff",
    marginRight: 37,
  };
});

export const RowContainer = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };
});
