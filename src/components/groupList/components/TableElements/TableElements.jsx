import React from "react";

export const Th = ({ style, ...restProps }) => {
  return (
    <th
      style={{
        minWidth: "50px",
        border: "1px solid #333030",
        ...style,
        // padding: "15px",
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
        ...style,
        // padding: "15px",
      }}
      {...restProps}
    >
      {restProps.children}
    </td>
  );
};
