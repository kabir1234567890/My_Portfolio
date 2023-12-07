import { EmojiEvents } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Observe from "../Component/tools/Observe";
import { useState } from "react";
import LinearWithValueLabel from "../Component/tools/ProgressBar";

const FirstSection = () => {
  const image = process.env.REACT_APP_LOGO_PATH + "my_passport_size_pic-01.png";
  const border = {
    width: "5px",
    height: "22rem",
    backgroundColor: "#007bff",
    display: "block",
    ml: { xs: 0, sm: 2, md: 4, lg: 8 },
  };

  const data = [
    {
      title: "Secure Coding Practices",
      body: "Utilizing industry-leading secure coding practices to safeguard your digital assets.",
    },
    {
      title: "Data Protection and Privacy",
      body: "Prioritizing data protection and privacy, ensuring compliance with regulatory standards like GDPR",
    },
    {
      title: "Version Control",
      body: " Implementing version control systems like Git for transparent and traceable code changes.",
    },
    {
      title: "Testing & Quality Assurance",
      body: " Rigorous testing methodologies, including automated testing, to guarantee high-quality and error-free solutions",
    },
    {
      title: "Responsive Design:",
      body: " Crafting websites with responsive design principles for optimal user experiences across various devices.",
    },
  ];
  return (
    <Grid container sx={{ mt: 3 }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Avatar
          variant="square"
          src={image}
          alt="K"
          sx={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={12} sm={4} md={6} lg={7}>
        <Box sx={{ display: "flex" }}>
          <Box sx={border}></Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5">Your Project is in Safe Hands</Typography>
            {data.map((data, index) => (
              <>
                <Typography variant="body1" sx={{ marginRight: 1 }}>
                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <b>
                        {index + 1}. {data.title}:
                      </b>
                    </Grid>
                    <Grid item xs={8} sx={{ textAlign: "left" }}>
                      {" "}
                      {data.body}
                    </Grid>
                  </Grid>
                </Typography>
                <br />
              </>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const Reward = () => {
  return (
    <Box
      sx={{
        m: 6,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <Box>
        <EmojiEvents sx={{ fontSize: "80px" }} />
        <Typography variant="h4">Java UML</Typography>
        <Typography variant="body1">
          Certified from Nptel and IIT kharagpur
        </Typography>
      </Box>
      <Box>
        <EmojiEvents sx={{ fontSize: "80px" }} />
        <Typography variant="h4">Web Development</Typography>
        <Typography variant="body1">Certified from Udemy</Typography>
      </Box>
      <Box>
        <EmojiEvents sx={{ fontSize: "80px" }} />
        <Typography variant="h4">Azure foundation</Typography>
        <Typography variant="body1">Certified from Microsoft</Typography>
      </Box>
    </Box>
  );
};

const Skills = () => {
  const [startObserve, setStartObserve] = useState(false);
  const setObserve = () => {
    console.log("triggered");
    setStartObserve(true);
  };
  const data = [
    { name: "HTML", value: 90 },
    { name: "React", value: 80 },
    { name: "Node", value: 60 },
    { name: "CSS", value: 80 },
    { name: "MySql", value: 70 },
    { name: "MongoDB", value: 80 },
    { name: "Ejs", value: 60 },
    { name: "Php", value: 60 },
    { name: "Laravel", value: 70 },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        pb: 4,
        mt: 3,
        mr: 1,
        ml: 1,
      }}
    >
      <Box sx={{ m: 3 }}>
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Technical Skills
        </Typography>
        <div className="underLine"></div>
      </Box>
      {!startObserve && <Observe callFunction={setObserve} />}
      <Box sx={{ pt: 2, pb: 2 }}>
        {data.map((data) => (
          <Box sx={{ mt: 2, mb: 2 }}>
            <Typography sx={{ width: "60vw" }} variant={"h4"}>
              {data.name}:
            </Typography>
            {startObserve && <LinearWithValueLabel value={data.value} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
const About = () => {
  return (
    <Box>
      <Box sx={{ m: 3 }}>
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          About Me
        </Typography>
        <div className="underLine"></div>
      </Box>
      <Typography
        variant="h6"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Let me tell you about myself
      </Typography>
      <FirstSection />
      <Reward />
      <Skills />
    </Box>
  );
};

export default About;
