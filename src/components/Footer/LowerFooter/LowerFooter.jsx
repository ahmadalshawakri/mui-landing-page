import React from "react";
import facebook from "../../../images/icon-facebook.svg";
import twitter from "../../../images/icon-twitter.svg";
import pinterest from "../../../images/icon-pinterest.svg";
import instagram from "../../../images/icon-instagram.svg";
import {
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styles from "./LowerFooter.module.css";
const LowerFooter = () => {
  const appTheme = useTheme();
  const match = useMediaQuery(appTheme.breakpoints.down("md"));
  return (
    <footer className={styles.footerCont}>
      <Typography
        variant="h5"
        sx={{ fontFamily: "Poppins", fontWeight: "700" }}
      >
        Shortly
      </Typography>
      <div className={styles.footerLinks}>
        <Typography
          sx={{ color: "#fff", fontFamily: "Poppins", fontWeight: "700" }}
        >
          Features
        </Typography>
        <List className={styles.footerList}>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                justifyContent: `${match ? "center" : "flexStart"}`,
                padding: "0",
                fontFamily: "Poppins",
              }}
            >
              Link Shortening
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Branded Links
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Analytics
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className={styles.footerLinks}>
        <Typography
          sx={{ color: "#fff", fontFamily: "Poppins", fontWeight: "700" }}
        >
          Resources
        </Typography>
        <List className={styles.footerList}>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Blog
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Developers
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Support
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className={styles.footerLinks}>
        <Typography
          sx={{ color: "#fff", fontFamily: "Poppins", fontWeight: "700" }}
        >
          Company
        </Typography>
        <List className={styles.footerList}>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              About
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Our Team
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Careers
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ padding: "0", margin: "0", height: "1rem", color: "#ccc" }}
          >
            <ListItemButton
              alignItems="flex-start"
              sx={{
                padding: "0",
                fontFamily: "Poppins",
                justifyContent: `${match ? "center" : "flexStart"}`,
              }}
            >
              Contact
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className={styles.socialMedia}>
        <img src={facebook} alt="Facebook Icon" />
        <img src={twitter} alt="Twitter Icon" />
        <img src={pinterest} alt="Pinterest Icon" />
        <img src={instagram} alt="Instagram Icon" />
      </div>
    </footer>
  );
};

export default LowerFooter;
