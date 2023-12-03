import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import MainRoute from "./mainroute/MainRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./Component/Navbar/Footer";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007bff", // Replace with your primary color
      },
      secondary: {
        main: "#dc3545", // Replace with your secondary color
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif", // Replace with your desired font family
      fontSize: 14, // Replace with your desired default font size
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    // Additional theme configurations...
  });
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <MainRoute />
          <Footer />
        </Router>
      </ThemeProvider>
    </Box>
  );
}

export default App;
