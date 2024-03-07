import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "antd";
import { inputPatternTitle, inputTextPattern } from "components/Common/inputs/variables";
import classnames from "classnames";

const useStyles = makeStyles({
  root: {
    background: "transparent !important",
    border: "1px solid rgba(152, 157, 181, 1) !important",
    padding: 8,
    borderRadius: 12,

    "&>input": {
      background: "transparent !important",
      color: "rgba(152, 157, 181, 1) !important",
    },
    "&input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

const CustomInput = ({ allowClear = false, disablePattern = false, className, ...props }) => {
  const classes = useStyles();

  const onScroll = useCallback(e => e.currentTarget.blur(), []);

  return (
    <Input
      {...props}
      className={classnames(classes.root, className)}
      onWheel={onScroll}
      allowClear={allowClear}
      pattern={!disablePattern && inputTextPattern}
      title={!disablePattern && inputPatternTitle}
    />
  );
};
export default CustomInput;
