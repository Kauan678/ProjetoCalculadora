import React from "react";
import { Container, Typography } from "@mui/material";
import { Button, Grid } from "@mui/material";

const Calculadora = () => {
  const [expression, setExpression] = React.useState("");

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleEqualClick = () => {
    try {
      setExpression(eval(expression).toString());
    } catch {
      setExpression('Erro');
    }
  };

  const handleClearClick = () => {
    setExpression('');
  };

  const handleBackspaceClick = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Calculadora
        </Typography>
        <Typography variant="h5" gutterBottom>
          {expression}
        </Typography>
        <Grid container spacing={2}>
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "=", "C","←"].map(
            (value) => (
              <Grid item xs={4} key={value}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    if (value === "=") {
                      handleEqualClick();
                    } else if (value === "C") {
                      handleClearClick();
                    } else if (value === "←") {
                      handleBackspaceClick();
                    } else {
                      handleButtonClick(value);
                    }
                  }}
                >
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
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleButtonClick(operator)}
                >
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
