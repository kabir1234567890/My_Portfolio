import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
  const image = process.env.REACT_APP_LOGO_PATH + "homeBanner.png";
  return (
    <Box>
      <Grid container>
        <Grid lg={1} md={1} xs={12}></Grid>
        <Grid lg={6} md={6} xs={12} className={"homeTitle"}>
          <Typography variant="h2">
            <Typewriter
              options={{
                strings: [
                  "Hello! ",
                  "My name is Kabirahmed",
                  "I am a Web Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <br />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nihil cum culpa placeat, molestiae rem nam itaque architecto
            sapiente veritatis harum, dolorem quasi in inventore voluptas
            laborum quibusdam. Eius, consequatur!
          </Typography>
          <Button variant="contained" component={Link} to="/about">
            About me
          </Button>
        </Grid>
        <Grid lg={5} md={5} xs={12}>
          <img src={image} alt={"alt"} className="bannerImage" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
