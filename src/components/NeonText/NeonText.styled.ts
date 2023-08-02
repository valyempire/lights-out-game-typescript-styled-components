/**
 * Imports styled
 */
import { styled, CSSObject } from "@mui/system";

/**
 * Imports types
 */
import { NeonTextProps } from "./NeonText.types";

/**
 * Styles the Container
 */
export const Container = styled("h2", {
  shouldForwardProp: (propName) => propName !== "color",
})<NeonTextProps>((props) => {
  const { color } = props;

  /**
   * Gets the text color
   */
  const getTextColor = () => {
    switch (color) {
      case "blue":
        return "#426dfb";
      case "green":
        return "#4caf50";
      case "orange":
        return "#fb4264";
      default:
        return "#000";
    }
  };
  /**
   * Gets the text shadow color
   */
  const getTextShadowColor = () => {
    switch (color) {
      case "blue":
        return "#2356ff";
      case "green":
        return "#2e7d32";
      case "orange":
        return "#f40a35";
      default:
        return "#000";
    }
  };

  /**
   * Gets the keyframe based on the color
   */
  const getKeyframes = () => {
    switch (color) {
      case "blue":
        return {
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
        };
      case "green":
        return {
          "0%, 100%": {
            textShadow:
              "0 0 0.5vw #0f9d58, 0 0 1.5vw #0f9d58, 0 0 5vw #0f9d58, 0 0 5vw #0f9d58, 0 0 0.2vw #a7ffeb, 0.25vw 0.25vw 0.05vw #0f4d29",
            color: "#a7ffeb",
          },
          "50%": {
            textShadow:
              "0 0 0.25vw #082e14, 0 0 0.75vw #082e14, 0 0 2.5vw #082e14, 0 0 2.5vw #082e14, 0 0 0.1vw #082e14, 0.25vw 0.25vw 0.05vw #041710",
            color: "#0f4d29",
          },
        };
      case "orange":
        return {
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
        };
      default:
        return {};
    }
  };
  /**
   * Defines the component styles
   */
  const styles: CSSObject = {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: getTextColor(),
    fontSize: 60,
    margin: 0,
    fontFamily: "Lucida Handwriting",
    textShadow: `0 0 3vw ${getTextShadowColor()}`,
    animation: `neon-${color} 2s ease-in-out infinite alternate`,
    MozAnimation: ` neon-${color} 2s ease-in-out infinite alternate`,
    WebkitAnimation: `neon-${color} 2s ease-in-out infinite alternate`,
    "@media (max-width: 768px)": {
      fontSize: 50,
    },
    "@media (max-width: 320px)": {
      fontSize: 40,
    },
  };

  styles[`@keyframes neon-${color}`] = getKeyframes();

  return styles;
});
