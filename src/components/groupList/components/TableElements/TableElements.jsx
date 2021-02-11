import React from "react";

export const Th = ({ style, ...restProps }) => {
  return (
    <th
      style={{
        minWidth: "50px",
        border: "1px solid #333030",
        color:"white",
        fontSize:"12x",
        fontWeight:'300',
        ...style,
      }}
      {...restProps}
    >
      {restProps.children}
    </th>
  );
};

export const Td = ({ style, ...restProps }) => {
  return (
    <td
      style={{
        minWidth: "50px",
        border: "1px solid #616666",
        color:"white",
        fontSize:"12x",
        fontWeight:'300',
        ...style,
      }}
      {...restProps}
    >
      {restProps.children}
    </td>
  );
};
