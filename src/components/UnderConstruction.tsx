import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Palette } from "../themes/Palette";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    color: Palette.colors.green["500"]
  },
  button: {
    color: Palette.colors.blue["700"],
    textDecoration: "none",
    cursor: "pointer"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export default function ScenarioDetails() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Coming Soon
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Our page is in under contruction.
        </Typography>
        <Typography variant="body1">
          <NavLink className={classes.button} to="/">
            <Button variant="outlined" color="primary"> Go back to Scenario Manager</Button>
          </NavLink>
        </Typography>
      </Container>
    </div>
  );
}
