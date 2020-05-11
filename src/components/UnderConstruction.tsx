import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // background: "linear-gradient(-45deg,#ac32e4,#7918f2,#4801ff)",
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
          <Link style={{ textDecoration: "none" }} to="/scenarioDetails">
            Go to the Scenario Manager
          </Link>
        </Typography>
      </Container>
    </div>
  );
}
