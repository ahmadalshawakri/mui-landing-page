import { Button } from "@mui/material";
import React from "react";

const ContainedButton = ({ children, width, radius }) => {
  const containedButtonStyle = {
    width: width,
    background: "hsl(180, 66%, 49%)",
    color: "#fff",
    fontWeight: "700",
    borderRadius: radius ? radius : "1rem",
    textAlign: "center",
  };
  return (
    <Button variant="contained" style={containedButtonStyle}>
      {children}
    </Button>
  );
};

export default ContainedButton;
