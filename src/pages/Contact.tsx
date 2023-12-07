import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
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
  return (
    <Box sx={{ mt: 3 }}>
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
          onSubmit={(values) => {
            console.log(values);
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
    </Box>
  );
};
