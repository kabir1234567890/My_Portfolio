import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  CardActionArea,
} from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";

const HomeBanner = () => {
  const image = process.env.REACT_APP_LOGO_PATH + "my_full_image.png";
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
  const cardsData = [
    {
      title: "Understand Client Needs",
      description:
        "In this initial phase, I take the time to thoroughly understand my client's requirements, goals, and vision for their project. Through detailed discussions and careful analysis, I ensure a clear understanding of the project's purpose and objectives.",
    },
    {
      title: "Design and Develop",
      description:
        "Once the requirements are clear, I proceed to design and develop a customized solution. This involves creating wireframes, prototypes, and user interfaces that not only meet the functional specifications but also provide an exceptional user experience. Using the latest technologies, I bring designs to life with clean, efficient, and scalable code.",
    },
    {
      title: "Test, Optimize, and Launch",
      description:
        "Quality assurance is paramount in my development process. Rigorous testing is conducted to identify and fix any potential issues. Performance optimization ensures fast loading times and a seamless user experience. Once satisfied with the results, I assist in the deployment and launch of the project.",
    },
  ];
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
        <Box
          sx={{
            ml: 3,
            mr: 1,
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
            flexWrap: "wrap",
          }}
        >
          {cardsData.map((card, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, margin: "auto", minHeigth: 250 }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#007BFF",
                      color: "white",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.2)", // Enlarge to 120% on hover
                      },
                    }}
                  >
                    <DescriptionIcon sx={{ fontSize: 60 }} />
                  </Avatar>
                </Box>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
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
