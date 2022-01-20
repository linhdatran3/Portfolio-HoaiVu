import React from "react";
import { useState } from "react";
import { Button, TextField, Container, Grid } from "@mui/material";

const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="md">
      <form className={"form"} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="fullName"
              label="Full Name"
              autoFocus
              onChange={({ target: { value } }) =>
                setData({ ...data, name: value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              autoFocus
              onChange={({ target: { value } }) =>
                setData({ ...data, email: value })
              }
            />
          </Grid>
        </Grid>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="message"
          label="Your message"
          autoFocus
          onChange={({ target: { value } }) =>
            setData({ ...data, message: value })
          }
          multiline
          maxRows={5}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={"submit"}
        >
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
