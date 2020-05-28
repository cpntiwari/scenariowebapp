import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Palette } from "@jda/lui-common-component-library";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(0),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightBold,
        color: Palette.colors.green["700"],
        textDecoration: "none",
        cursor: "pointer"
      },
    },
  })
);

export default function OutlinedButtons() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" >More Details</Button>
    </div>
  );
}
