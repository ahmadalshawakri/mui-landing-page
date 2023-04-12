import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustom from "../../images/icon-fully-customizable.svg";
import React from "react";
import styles from "./Statistics.module.css";

const Statistics = () => {
  const appTheme = useTheme();
  const match = useMediaQuery(appTheme.breakpoints.down("md"));

  const customStyles = {
    avatars: {
      background: "hsl(257, 27%, 26%)",
      position: "absolute",
      transform: "translate(30%, -80%)",
      padding: "0.6rem",
    },
    dividers: {
      width: match ? "1rem" : "2rem",
      height: match ? "3rem" : "0.7rem",
      background: "hsl(180, 66%, 49%)",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h2">Advanced Statistics</Typography>
        <Typography variant="body1">
          Track how your links are performing across the web with our advances
          statistics dashboard
        </Typography>
      </div>
      <div className={styles.cards}>
        <Card sx={{ maxWidth: "20rem", padding: "0", margin: "0" }}>
          <CardHeader
            avatar={
              <Avatar
                src={brandRecognition}
                alt="Brand Recognition"
                sx={customStyles.avatars}
              />
            }
          />
          <CardContent className={styles.cardsContent}>
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              Brand Recognition
            </Typography>
            <Typography variant="body1">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links helpinstill confidence in your content
            </Typography>
          </CardContent>
        </Card>

        <Divider
          orientation={match ? "vertical" : "horizontal"}
          sx={customStyles.dividers}
        />

        <Card
          sx={{
            maxWidth: "20rem",
            padding: "0",
            margin: "0",
            mt: match ? "0" : "5rem",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={detailedRecords}
                alt="Detailed Records"
                sx={customStyles.avatars}
              />
            }
          />
          <CardContent className={styles.cardsContent}>
            <Typography variant="h5">Detailed Records</Typography>
            <Typography variant="body1">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions
            </Typography>
          </CardContent>
        </Card>

        <Divider
          orientation={match ? "vertical" : "horizontal"}
          sx={customStyles.dividers}
        />

        <Card
          sx={{
            maxWidth: "20rem",
            padding: "0",
            margin: "0",
            mt: match ? "0" : "10rem",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={fullyCustom}
                alt="Fully Custom"
                sx={customStyles.avatars}
              />
            }
          />
          <CardContent className={styles.cardsContent}>
            <Typography variant="h5">Fully Custom</Typography>
            <Typography variant="body1">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;
