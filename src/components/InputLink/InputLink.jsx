import { TextField, useTheme, useMediaQuery } from "@mui/material";
import ContainedButton from "../UI/ContainedButton/ContainedButton";
import React from "react";
import styles from "./InputLink.module.css";

const InputLink = () => {
  const appTheme = useTheme();
  const match = useMediaQuery(appTheme.breakpoints.down("md"));
  return (
    <div className={styles.container}>
      <div className={styles.contnet}>
        <TextField
          variant="outlined"
          placeholder="Shorten a link here..."
          sx={{
            minWidth: "80%",
            backgroundColor: "#fff",
            borderRadius: "0.4rem",
          }}
        />
        <ContainedButton width={match ? "80%" : "10rem"} radius="0.4rem">
          Shorten it!
        </ContainedButton>
      </div>
    </div>
  );
};

export default InputLink;
