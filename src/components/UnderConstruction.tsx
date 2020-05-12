import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
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
          Our page is under contruction.
        </Typography>
        <Typography variant="body1">
          <NavLink style={{ textDecoration: "none" }} to="/">
            Go to the Scenario Manager
          </NavLink>
        </Typography>
      </Container>
    </div>
  );
}
