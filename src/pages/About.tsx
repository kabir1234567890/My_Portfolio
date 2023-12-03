import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const FirstSection = () => {
  const image = process.env.REACT_APP_LOGO_PATH + "my_passport_size_pic-01.png";
  const border = {
    width: "2px",
    height: "25rem",
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
      title: "Testing and Quality Assurance",
      body: " Rigorous testing methodologies, including automated testing, to guarantee high-quality and error-free solutions",
    },
  ];
  return (
    <Grid container sx={{ mr: 8, ml: 8, mt: 3 }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Avatar
          variant="square"
          src={image}
          alt="K"
          sx={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={10} sm={4} md={6} lg={7}>
        <Box sx={{ display: "flex" }}>
          <Box sx={border}></Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5">Your Project is in Safe Hands</Typography>
            {data.map((data, index) => (
              <Typography variant="body1" sx={{ marginRight: 1 }}>
                <Grid container>
                  <Grid item xs={4} sx={{ textAlign: "left" }}>
                    <b>
                      {index + 1}. {data.title}:
                    </b>
                  </Grid>
                  <Grid item xs={8} sx={{ textAlign: "left" }}>
                   {' '} {data.body}
                  </Grid>
                </Grid>
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
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
    </Box>
  );
};

export default About;
