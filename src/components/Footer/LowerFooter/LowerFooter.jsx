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

  const customStyles = {
    lists: {
      padding: "0",
      margin: "0",
      height: "1rem",
      color: "#ccc",
    },

    listsBtns: {
      justifyContent: `${match ? "center" : "flexStart"}`,
      padding: "0",
      fontFamily: "Poppins",
    },

    listsHeaders: {
      color: "#fff",
      fontFamily: "Poppins",
      fontWeight: "700",
    },
  };

  return (
    <footer className={styles.footerCont}>
      <Typography
        variant="h5"
        sx={{ fontFamily: "Poppins", fontWeight: "700" }}
      >
        Shortly
      </Typography>
      <div className={styles.footerLinks}>
        <Typography sx={customStyles.listsHeaders}>Features</Typography>
        <List className={styles.footerList}>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Link Shortening
            </ListItemButton>
          </ListItem>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Branded Links
            </ListItemButton>
          </ListItem>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Analytics
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className={styles.footerLinks}>
        <Typography sx={customStyles.listsHeaders}>Resources</Typography>
        <List className={styles.footerList}>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Blog
            </ListItemButton>
          </ListItem>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Developers
            </ListItemButton>
          </ListItem>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Support
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div className={styles.footerLinks}>
        <Typography sx={customStyles.listsHeaders}>Company</Typography>
        <List className={styles.footerList}>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              About
            </ListItemButton>
          </ListItem>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Our Team
            </ListItemButton>
          </ListItem>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
              Careers
            </ListItemButton>
          </ListItem>
          <ListItem sx={customStyles.lists}>
            <ListItemButton alignItems="flex-start" sx={customStyles.listsBtns}>
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
