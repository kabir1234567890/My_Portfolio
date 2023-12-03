import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import { LinearProgress } from "@mui/material";
import { Contact } from "../pages/Contact";
import { Blogs } from "../pages/Blogs";

const MainRoute = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
