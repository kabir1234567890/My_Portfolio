import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const Navbar = () => {
  const logoPath = process.env.REACT_APP_LOGO_PATH + "logo-01.png";
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <AppBar
      position="sticky"
      style={{
        top: 0,
        transition: "top 0.3s",
        display: visible ? "" : "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Avatar
            src={logoPath}
            sx={{
              width: isSmallScreen ? 64 : 84,
              height: isSmallScreen ? 64 : 84,
            }}
          />
        </Typography>

        {isSmallScreen ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ display: { sm: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="responsive-menu"
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              sx={{ display: { sm: "block", md: "none" } }}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
                About
              </MenuItem>
              {/* <MenuItem component={Link} to="/blog" onClick={handleMenuClose}>
                Blogs
              </MenuItem> */}
              <MenuItem
                component={Link}
                to="/contact"
                onClick={handleMenuClose}
              >
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button component={Link} to="/" color="inherit" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit" sx={{ mx: 1 }}>
              About
            </Button>
            {/* <Button component={Link} to="/blog" color="inherit" sx={{ mx: 1 }}>
              Blogs
            </Button> */}
            <Button
              component={Link}
              to="/contact"
              color="inherit"
              sx={{ mx: 1 }}
            >
              Contact
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
