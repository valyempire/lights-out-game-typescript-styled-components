/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports types
 */
import { ContentContainerProps } from "./Modal.types";

/**
 *  Styles the Modal Overlay
 */
export const ModalOverlay = styled("div")(() => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    cursor: "default",
  };
});

// /**
//  *  Styles the Modal Content
//  */
// export const ModalContent = styled("div")(() => {
//   return {
//     position: "relative",
//     width: 876,
//     height: "auto",
//     backgroundColor: "#212121",
//     borderRadius: 5,
//     padding: 20,
//     zIndex: 1000,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };
// });

/**
 * Styles the Modal Content
 */
export const ModalContent = styled("div", {
  shouldForwardProp: (propName) => propName !== "width",
})<ContentContainerProps>((props) => {
  const { width } = props;

  return {
    position: "relative",
    width: width || 876,

    height: "auto",
    backgroundColor: "#212121",
    borderRadius: 5,
    padding: 20,
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      height: "auto",
      width: 600,
    },
    "@media (max-width: 391px)": {
      height: "auto",
      width: 300,
    },
  };
});

/**
 *  Styles the Modal Content
 */
export const Title = styled("h2")(() => {
  return {
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  };
});

/**
 * Styles the Modal Header
 */
export const ModalHeader = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  };
});

/**
 * Styles the Close Button
 */
export const CloseButton = styled("button")(() => {
  return {
    position: "absolute",
    top: 15,
    right: 15,
    fontSize: 30,
    cursor: "pointer",
    backgroundColor: "transparent",
    maxWidth: 30,
    maxHeight: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    "& svg": {
      color: "#fff",
      margin: 10,
    },
    "&:hover": {
      backgroundColor: "#fff",
      "& svg": {
        color: "#000",
      },
    },
  };
});
