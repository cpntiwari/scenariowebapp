import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  makeStyles,
  Theme,
  createStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { SortableTable } from "./common/SortableTable";
import { EmptyProps } from "../common/types";
import { Palette } from "../themes/Palette";
import { ScenarioCardComponent } from "./ScenarioCardComponent";

const theme = createMuiTheme({
  overrides: {
    MuiTableHead: {
      root: {
        borderTopWidth: "1px",
        borderTopColor: "#DCDCDC",
        borderTopStyle: "solid"
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "none",
      },
      elevation2: {
        boxShadow: "none",
      },
    },
  },
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold,
      color: Palette.colors.grey["700"],
    }
  })
);
interface DataType {
  data: Array<any>,
}

export const ScenarioManager = () => {
  const classes = useStyles();
  return (
    <ExpansionPanel
      defaultExpanded={true}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Scenario Manager</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <MuiThemeProvider theme={theme}>
          <ScenarioCardComponent></ScenarioCardComponent>
        </MuiThemeProvider>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
