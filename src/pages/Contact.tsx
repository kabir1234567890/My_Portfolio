import {
  Box,
  Button,
  Card,
  CircularProgress,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Fragment, useState } from "react";

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),

    lastName: Yup.string().required("Last Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    topic: Yup.string().required("Topic is required"),

    description: Yup.string().required("Description is required"),
  });
  // const isSmallScreen = useMediaQuery((theme: any) =>
  //   theme.breakpoints.down("xs")
  // );

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <Box sx={{ mt: 3 }}>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: theme.zIndex.modal + 1, // Ensure the loader is above other content
          }}
        >
          <CircularProgress
            sx={{
              color: theme.palette.primary.main, // Set the color to your primary theme color
            }}
            size={50}
            thickness={5}
          />
        </Box>
      )}
      <Card
        sx={{
          maxWidth: "600px",
          margin: { lg: "auto", md: "auto", sm: "auto", xs: "10px" },
          my: 2,
        }}
      >
        <Box sx={{ m: 3 }}>
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Here is How you can Reach me
          </Typography>
          <div className="underLine1"></div>
        </Box>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            topic: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setLoading(true);
            const emailParams = {
              to_email: values.email,
              message: values.description,
              email: values.email,
              topic: values.topic,
              to_name: "kabir hawa",
              from_name: `${values.firstName} ${values.lastName}`,
            };

            // Send the email
            emailjs
              .send(
                "service_fz2fc4t",
                "template_yfi6stn",
                emailParams,
                "78pneQC1siawrKCpq"
              )
              .then(() => {
                setMessage("Thanks for contacting me!");
                setOpen(true);
                setLoading(false);
                resetForm();
              })
              .catch(() => {
                setMessage(
                  "Sorry there is Technical issue please try tommorow"
                );
                setLoading(false);
              });
          }}
        >
          <Form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <Field
                as={TextField}
                label="First Name"
                name="firstName"
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="firstName" component="div" />}
              />
              <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="lastName" component="div" />}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <Field
                as={TextField}
                label="Email"
                name="email"
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="email" component="div" />}
              />

              <Field
                as={TextField}
                label="Topic"
                name="topic"
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="topic" component="div" />}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Field
                as={TextField}
                label="Description"
                name="description"
                sx={{ maxWidth: "400px", mx: 1 }}
                multiline
                fullWidth
                rows={4}
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="description" component="div" />}
              />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}
            >
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        </Formik>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message ? message : "sorry for inconvinence"}
        action={
          <Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Fragment>
        }
      />
    </Box>
  );
};
