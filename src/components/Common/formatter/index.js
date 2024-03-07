import React from "react";
import { Tag } from "antd";
import moment from "moment";

export const textFormatter = val => (!val ? <Tag color={"gold"}>{"-"}</Tag> : <div>{val}</div>);

export const camelCaseTextFormatter = string =>
  !!string
    ? string
        .split(/(?=[A-Z])/)
        .join(" ")
        .toUpperCase()
    : "-";

export const uppercaseTextFormatter = val =>
  !val ? <Tag color={"gold"}>{"-"}</Tag> : <span className="uppercase-text">{val}</span>;

export const customDateFormatWithTime = timestamp =>
  !!timestamp ? moment(timestamp).format("YYYY-MM-DD HH:mm:ss") : null;

export const customDateMonth = timestamp => (!!timestamp ? moment(timestamp).format("MMMM Do, YYYY") : null);
export const customDateFormatWithoutTime = timestamp => (!!timestamp ? moment(timestamp).format("YYYY-MM-DD") : null);
