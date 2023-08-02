import { styled } from "@mui/system";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0, // Adăugăm margin-top 0 pentru a elimina spațiul de sus
  };
});
