/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the container
 */
export const Container = styled("div")(() => {
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

export const LeftTopSection = styled("div")({
  display: "flex", // Setăm containerul să fie flexibil
  alignItems: "center", // Aliniem componentele în centru pe axa verticală
  justifyContent: "flex-start", // Aliniem componentele la stânga pe axa orizontală
  marginBottom: 20,
  gap: 20, // Adăugăm un spațiu între componentele din stânga
});
