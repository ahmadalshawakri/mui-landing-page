import { Typography } from "@mui/material";
import workingPerson from "../../images/illustration-working.svg";
import ContainedButton from "../UI/ContainedButton/ContainedButton";
import React from "react";
import styles from "./Bio.module.css";

const Bio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoCont}>
        <Typography variant="h2" sx={{ fontWeight: "700" }}>
          More Than just shorter links
        </Typography>
        <Typography variant="h5" sx={{ color: "hsl(0, 0%, 40%)" }}>
          Build your brand's recognition and get detailed insights on how your
          link are performing
        </Typography>
        <ContainedButton width="10rem">Get Started</ContainedButton>
      </div>
      <div className={styles.imgCont}>
        <img src={workingPerson} alt="Working Person" />
      </div>
    </div>
  );
};

export default Bio;
