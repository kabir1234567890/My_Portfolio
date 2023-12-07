import { Box, Typography } from "@mui/material";


const NotFound = () => {
  return (
    <Box className="not-found-container">
      <Typography variant={"h3"}>404 - Not Found</Typography>
      <Typography variant={"body1"}>Sorry, the page you are looking for does not exist.</Typography>
    </Box>
  );
};

export default NotFound;
