import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { Formik } from "formik";
import { useFormik } from "formik";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    marginTop: "5rem",
    flexDirection: 'column',
    // verticalAlign: "center",
    // alignContent: "center",
    // justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 5,
    borderRadius: 20,
    borderBlockWidth: 5,
    borderBlockColor: "blue",
  },
});

function SignUp() {
  const classes = styles();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      password2: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container className={classes.wrapper} maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password2"
              label="Password2"
              variant="outlined"
              type="password"
              fullWidth
              value={formik.values.password2}
              onChange={formik.handleChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              SignUp With Google
            </Button>
          </Grid> */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SignUp;

// submit
// googlela submit
// displayName input
// email input
// password input
