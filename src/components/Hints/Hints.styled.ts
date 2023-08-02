/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 *  Styles the Container
 */
export const Button = styled("button")(() => {
  return {
    // display: "inline-block",
    // float: "left",
    // padding: 13,
    // backgroundColor: "#151a7a",
    // color: "white",
    // marginLeft: 10,
    // transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out", // Adăugăm o tranziție pentru efectul de hover
    // boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)",
    // "&:hover": {
    //   backgroundColor: "#00bfff", // Schimbăm culoarea de fundal la hover
    //   color: "#fff", // Schimbăm culoarea textului la hover
    //   cursor: "pointer",
    // },
    border: "1px solid #263238",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#073b7c",
    cursor: "pointer",
    "& svg": {
      cursor: "pointer",
      fontSize: 30,
      color: "#fff",
    },

    "&:hover": {
      backgroundColor: "#00bfff",
    },
  };
});
