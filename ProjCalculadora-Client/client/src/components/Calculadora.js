import React from "react";
import { Container, Typography } from "@mui/material";
import { Button, Grid } from "@mui/material";

const Calculadora = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Calculadora
      </Typography>
      <Grid container spacing={2}>
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="].map(
          (value) => (
            <Grid item xs={4} key={value}>
              <Button variant="contained" fullWidth>
                {value}
              </Button>
            </Grid>
          )
        )}
        <br />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ marginBottom: "20px", marginTop: "0px" }} 
        >
          {["+", "-", "*", "/"].map((operator) => (
            <Grid item xs={2.93} key={operator}>
              <Button variant="contained" fullWidth>
                {operator}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculadora;
