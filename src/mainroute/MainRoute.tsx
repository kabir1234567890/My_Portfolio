import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import { Box, LinearProgress } from "@mui/material";
import { Contact } from "../pages/Contact";
import { Blogs } from "../pages/Blogs";
import NotFound from "../Component/Navbar/Notfound";

const MainRoute = () => {
  return (
    <Suspense
      fallback={
        <Box sx={{ height: "100vh" }}>
          <LinearProgress />
        </Box>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
