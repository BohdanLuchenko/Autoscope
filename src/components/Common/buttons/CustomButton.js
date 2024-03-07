import React from "react";
import classname from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles({
  root: {
    position: "relative",
    background: "rgba(54, 62, 107, 1) !important",
    border: "none !important",
    padding: 16,
    borderRadius: 12,
    height: "45px",
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    //width: "fit-content",
    //minWidth: "130px",
    //justifyContent: "center",

    "& img": {
      marginRight: "10px",
      height: "20px",
    },
    "& a": {
      color: "#fff",
    },
    "& input": {
      background: "rgba(54, 62, 107, 1) !important",
      color: "rgba(152, 157, 181, 1) !important",
    },
    "&input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

const CustomButton = ({ link, text, icon, size, color, type, disabled, loading, className = "", ...props }) => {
  const classes = useStyles();

  return (
    <button
      {...props}
      disabled={!!disabled}
      title={text}
      className={classname(
        "button-general",
        className,
        size === "small" && "button-small",
        type === "round" && "button-round",
        type === "success" && "button-success",
        type === "error" && "button-error",
        color === "outlined" && "button-outlined",
        color === "outlined-white" && "button-outlined-white",
        disabled && "button-disabled",
        classes.root
      )}
    >
      {!!link ? (
        <a href={link}>
          {!!icon && <img src={icon} alt="icon" />}
          {text}
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                opacity: 1,
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </a>
      ) : (
        <>
          {!!icon && <img src={icon} alt="icon" />}
          {text}
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: "absolute",
                opacity: 1,
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </>
      )}
    </button>
  );
};
export default CustomButton;
