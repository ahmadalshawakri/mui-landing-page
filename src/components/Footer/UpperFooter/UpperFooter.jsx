import { Typography } from "@mui/material";
import ContainedButton from "../../UI/ContainedButton/ContainedButton";
import React from "react";
import styles from "./UpperFooter.module.css";

const UpperFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upperFooterCont}>
        <Typography variant="h4">Boost your links today</Typography>
        <ContainedButton width="10rem">Get Started</ContainedButton>
      </div>
    </div>
  );
};

export default UpperFooter;
