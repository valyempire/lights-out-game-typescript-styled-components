import { styled } from "@mui/system";

export const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

export const Input = styled("input")(() => {
  return {
    position: "relative",
    cursor: "pointer",
    margin: "1rem auto",
    width: 50,
    height: 30,
    borderRadius: 25,
    outline: "none",
    backgroundColor: "#ccc",
    webkitAppearance: "none",
    transition: "background .3s;rgba(0,0,0,0.15)",
    "& ::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "30%",
      transform: "translate(-50%, -50%)",
      borderRadius: " 50%",
      height: "1.25rem",
      width: "1.25rem",
      backgroundColor: "white",
      transition: "left .3s",
    },
  };
});
