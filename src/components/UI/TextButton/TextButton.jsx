import { Button } from "@mui/material";
import React from "react";

const TextButton = ({ children, textColor }) => {
  const textButtonStyle = {
    color: textColor ? textColor : "hsl(0, 0%, 50%)",
    fontWeight: "700",
    textAlign: "center",
  };
  return <Button style={textButtonStyle}>{children}</Button>;
};

export default TextButton;
