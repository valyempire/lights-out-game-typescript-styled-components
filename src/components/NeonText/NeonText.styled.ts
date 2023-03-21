import { styled } from "@mui/system";

export const NeonOrange = styled("div")(() => {
  return {
    fontFamily: "Brush Script MT",
    color: "#fb4264",
    fontSize: 80,
    textShadow: "0 0 3vw #f40a35",
    Animation: "neon-orange 1s ease infinite",
    MozAnimation: "neon-orange 1s ease infinite",
    WebkitAnimation: "neon-orange 1s ease infinite",
    " @keyframes neon-orange": {
      "0%, 100%": {
        textShadow:
          "0 0 0.5vw #fa1c16, 0 0 1.5vw #fa1c16, 0 0 5vw #fa1c16, 0 0 5vw #fa1c16, 0 0 0.2vw #fed128, 0.25vw 0.25vw 0.05vw #806914",
        color: "#fed128",
      },
      "50%": {
        textShadow:
          "0 0 0.25vw #800e0b, 0 0 0.75vw #800e0b, 0 0 2.5vw #800e0b, 0 0 2.5vw #800e0b, 0 0 0.1vw #800e0b, 0.25vw 0.25vw 0.05vw #40340a",
        color: "#806914",
      },
    },
  };
});

export const NeonBlue = styled("div")(() => {
  return {
    fontFamily: "Brush Script MT",
    color: "#426dfb",
    fontSize: 30,
    textShadow: "0 0 3vw #2356ff",

    Animation: "neon-blue 2s linear infinite",
    MozAnimation: "neon-blue 2s linear infinite",
    WebkitAnimation: "neon-blue 2s linear infinite",
    " @keyframes neon-blue": {
      "0%, 100%": {
        textShadow:
          "0 0 0.5vw #1041ff, 0 0 1.5vw #1041ff, 0 0 5vw #1041ff, 0 0 5vw #1041ff, 0 0 0.2vw #8bfdfe, 0.25vw 0.25vw 0.05vw #147280",
        color: "#29abe2",
      },
      "50%": {
        textShadow:
          "0 0 0.25vw #082180, 0 0 0.75vw #082180, 0 0 2.5vw #082180, 0 0 2.5vw #082180, 0 0 0.1vw #082180, 0.25vw 0.25vw 0.05vw #0a3940",
        color: "#146c80",
      },
    },
  };
});
