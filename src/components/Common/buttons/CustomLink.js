import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

const useStyles = makeStyles({
  root: {
    color: "#000000",

    "&:hover": {
      color: "#0085FF",
    },
  },
});

const CustomLink = ({ to, color = "#000", target = "_self", children, onClick, className = "", ...props }) => {
  const classes = useStyles();
  return (
    <Link
      {...props}
      style={{ color }}
      className={classnames(classes.root, className)}
      target={target}
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
