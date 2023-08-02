/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };
});

/**
 * Styles the container
 */
export const ContainerM = styled("div")(() => {
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

/**
 * Styles the Game Options
 */
export const GameTools = styled("div")(() => {
  return {
    position: "absolute",
    top: 10,
    left: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    "@media (max-width: 768px)": {
      top: 30,
    },
    "@media (max-width: 391px)": {
      top: 10,
    },
  };
});
