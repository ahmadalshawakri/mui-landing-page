import React from "react";
import TextButton from "../UI/TextButton/TextButton";
import ContainedButton from "../UI/ContainedButton/ContainedButton";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Menu,
  IconButton,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const appTheme = useTheme();
  const match = useMediaQuery(appTheme.breakpoints.down("md"));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      variant="outlined"
      color="transparent"
      sx={{ border: "none", paddingLeft: match ? "0" : "6rem" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Poppins", fontWeight: "700" }}
        >
          Shortly
        </Typography>

        {match ? (
          <Box>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="simpleMenu"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                style: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "hsl(257, 27%, 26%)",
                  minWidth: "15rem",
                },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <TextButton textColor="#fff">Features</TextButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <TextButton textColor="#fff">Pricing</TextButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <TextButton textColor="#fff">Resources</TextButton>
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem>
                <TextButton textColor="#fff">Login</TextButton>
              </MenuItem>
              <MenuItem>
                <ContainedButton width="10rem">SignUp</ContainedButton>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Container className={styles.btnCont}>
            <Box className={styles.linksBox}>
              <TextButton>Features</TextButton>
              <TextButton>Pricing</TextButton>
              <TextButton>Resources</TextButton>
            </Box>
            <Box className={styles.linksBox}>
              <TextButton>Login</TextButton>
              <ContainedButton width="6.7rem">SignUp</ContainedButton>
            </Box>
          </Container>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
