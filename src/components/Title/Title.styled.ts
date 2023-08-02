import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      marginTop: 50,
    },
    "@media (max-width: 320px)": {
      marginTop: 50,
      marginBottom: 15,
    },
  };
});
