import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./style.css";
import DescriptionIcon from "@mui/icons-material/Description";

const HomeBanner = () => {
  const image = process.env.REACT_APP_LOGO_PATH + "homeBanner.png";
  return (
    <Box sx={{ m: 3 }}>
      <Grid container>
        <Grid lg={1} md={1} xs={12}></Grid>
        <Grid lg={6} md={6} xs={12} className={"homeTitle"}>
          <Typography variant="h2">
            <Typewriter
              options={{
                strings: [
                  "Welcome to my Portfolio! ",
                  "I'm Kabirahmed,",
                  "A Passionate and Dedicated Full Stack Developer",
                  "With expertise in Laravel, ReactJS, and Node.js",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <br />
          <Typography variant="body1">
            Driven by my passion for coding and problem-solving, I am committed
            to delivering high-quality, efficient, and user-friendly web
            applications. By combining my strong technical skills with my
            ability to understand clients' needs, I create solutions that meet
            their unique requirements and exceed their expectations.
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

const ISpecialize = () => {
  const specializations = [
    {
      title: "Laravel Development",
      description:
        " I'm passionate about developing robust and efficient web applications using this powerful PHP framework.",
    },
    {
      title: "ReactJS Front-End",
      description:
        "I have a strong passion for ReactJS and specialize in developing dynamic and interactive user interfaces using this powerful JavaScript library. ",
    },
    {
      title: "Node.js Server-Side",
      description:
        " I'm passionate about leveraging its power to build scalable and efficient server-side applications. .",
    },
  ];
  return (
    <Box sx={{ m: 3 }}>
      <Box sx={{ m: 3 }}>
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          I SPECIALIZE IN
        </Typography>
        <div className="underLine"></div>
      </Box>
      <Box sx={{ m: 3 }}>
        <Typography
          variant="h6"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          As a Full Stack Developer, I specialize in Laravel, ReactJS, and
          Node.js.
        </Typography>
      </Box>
      <Box sx={{ ml: 3, mr: 1 }}>
        <Grid container spacing={2}>
          {specializations.map((specialization, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, height: 200 }}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <DescriptionIcon />
                  </Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {specialization.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {specialization.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const CreativeProcess = () => {
  return (
    <Box>
      <Box sx={{ m: 3 }}>
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          My Creative Process
        </Typography>
        <div className="underLine"></div>
      </Box>
      <Box sx={{ m: 3 }}>
        <Typography
          variant="h6"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          I Follow My Creative Process to Achieve My Desired Goal
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid lg={3} md={4} sm={6} xs={1}>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
const Home = () => {
  return (
    <>
      <HomeBanner />
      <ISpecialize />
      <CreativeProcess />
    </>
  );
};

export default Home;
