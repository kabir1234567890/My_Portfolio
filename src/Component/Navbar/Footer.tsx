import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const link = {
    textDecoration: "none",
    color: "inherit",
    width: "10px",
    mt: 1,
    mb: 1,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
      paddingLeft: "5px",
      color: "#94940b",
    },
  };
  const link2 = {
    textDecoration: "none",
    transition: "transform 0.3s ease-in-out",
    mx: 1,
    "&:hover": {
      transform: "scale(1.2)",
      color: "#94940b",
    },
  };
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About me
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                flexDirection: "column",
              }}
            >
              <Typography sx={link} component={Link} to="/">
                Home
              </Typography>
              <Typography sx={link} component={Link} to="/about">
                About
              </Typography>
              <Typography sx={link} component={Link} to="/blogs">
                Blogs
              </Typography>
              <Typography sx={link} component={Link} to="/contact">
                Contact
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Avatar
                component={Link}
                to="https://www.facebook.com/people/Kabir-Hawa/pfbid0AvFpMTMzyGfBQy11nXw8uunXq4QV8DFzy49J6RAhTW6UvHqiLQWB6U783ozLSHzcl/"
                color="inherit"
                sx={link2}
              >
                <Facebook />
              </Avatar>
              <Avatar
                component={Link}
                to="https://www.instagram.com/kabirahmedhawa/"
                color="inherit"
                sx={link2}
              >
                <Instagram />
              </Avatar>
              <Avatar
                component={Link}
                to="https://twitter.com/kabir_hawa"
                color="inherit"
                sx={link2}
              >
                <Twitter />
              </Avatar>
              <Avatar
                component={Link}
                to="https://www.linkedin.com/in/kabirahmed-hawawala-82b0b21b7/"
                color="inherit"
                sx={link2}  
              >
                <LinkedIn />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
