import React, { useState } from "react";
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
  console.log(logoPath);

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

  return (
    <AppBar position="static">
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
              <MenuItem onClick={handleMenuClose}>Blogs</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
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
            <Button color="inherit" sx={{ mx: 1 }}>
              Blogs
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              Contact
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
