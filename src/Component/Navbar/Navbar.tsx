import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import myImage from "../../assets/logo-01.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Avatar src={myImage} sx={{ width: 84, height: 84 }} />
        </Typography>
        <Button component={Link} to="/" color="inherit" sx={{ mx: 2 }}>
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit" sx={{ mx: 2 }}>
          About
        </Button>
        <Button color="inherit" sx={{ mx: 2 }}>
          portfolio
        </Button>
        <Button color="inherit" sx={{ mx: 2 }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
