import MaterialTable from "material-table";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expanded: {
      margin: "0 auto",
    },
  })
);
export default function ScenarioTable() {
  const classes = useStyles();
  return (
    <ExpansionPanel classes={{ expanded: classes.expanded }}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Scenario Manager</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <MaterialTable
          title=""
          columns={[
            {
              title: "SCENARIO",
              field: "scenario",
              customSort: (a, b) => a.scenario.length - b.scenario.length,
              cellStyle: {
                color: "#000",
                fontWeight: 500,
                fontSize: "16px",
              },
            },
            {
              title: "SCORE",
              field: "score",
              type: "numeric",
              cellStyle: {
                backgroundColor: "#e1f5f8",
                color: "#000",
                borderRight: "2px solid #000",
                fontWeight: "bold",
                fontSize: "16px",
              },
            },
            {
              title: "FILL RATE",
              field: "fillRate",
              type: "numeric",
              cellStyle: {
                color: "#000",
                fontWeight: 500,
                fontSize: "16px",
              },
              render: (rowData) => (
                <span>
                  {rowData.fillRate}
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "#008000",
                      fontSize: "12px",
                    }}
                  >
                    {rowData.fillRateData}
                    {rowData.fillRateDataIcon}
                  </span>
                </span>
              ),
            },
            {
              title: "REVENUE",
              field: "revenue",
              type: "numeric",
              cellStyle: {
                color: "#000",
                fontWeight: 500,
                fontSize: "16px",
              },
            },
            {
              title: "COST TO SERVE",
              field: "costToServe",
              type: "numeric",
              cellStyle: {
                color: "#000",
                fontWeight: 500,
                fontSize: "16px",
              },
            },
            {
              title: "MARGIN",
              field: "margin",
              type: "numeric",
              cellStyle: {
                color: "#000",
                fontWeight: 500,
                fontSize: "16px",
              },
            },
            {
              title: "IMPACTED DEMAND",
              field: "impactedDemand",
              type: "numeric",
              cellStyle: {
                color: "#000",
                fontWeight: 500,
                fontSize: "16px",
              },
            },
          ]}
          data={[
            {
              scenario: "Live -04-25-2020",
              score: 7.6,
              fillRate: 97.5,
              revenue: "$13",
              costToServe: "$0",
              margin: "$6.9K",
              impactedDemand: 0,
            },
            {
              scenario: "Live",
              score: "7.0",
              fillRate: 98.3,
              fillRateData: "1%",
              fillRateDataIcon: (
                <PlayArrowIcon
                  style={{
                    fontSize: "16px",
                    transform: "rotate(-90deg)",
                    marginBottom: "-5px",
                  }}
                />
              ),
              revenue: "$10.5K",
              costToServe: "$1.1K",
              margin: "$7.2K",
              impactedDemand: 400,
            },
            {
              scenario: "Recomended",
              score: 7.1,
              fillRate: 96.4,
              fillRateData: "1%",
              fillRateDataIcon: (
                <PlayArrowIcon
                  style={{
                    fontSize: "16px",
                    transform: "rotate(-90deg)",
                    marginBottom: "-5px",
                  }}
                />
              ),
              revenue: "$9.4K",
              costToServe: "$1.8K",
              margin: "$6.9K",
              impactedDemand: 450,
            },
            {
              scenario: "Override",
              score: "7.0",
              fillRate: 97.1,
              fillRateData: "1%",
              fillRateDataIcon: (
                <PlayArrowIcon
                  style={{
                    fontSize: "16px",
                    transform: "rotate(-90deg)",
                    marginBottom: "-5px",
                  }}
                />
              ),
              revenue: "$13.0K",
              costToServe: "$0.3K",
              margin: "$7.2K",
              impactedDemand: 90,
            },
            {
              scenario: "ML",
              score: 6.9,
              fillRate: 97.1,
              fillRateData: "1%",
              fillRateDataIcon: (
                <PlayArrowIcon
                  style={{
                    fontSize: "16px",
                    transform: "rotate(-90deg)",
                    marginBottom: "-5px",
                  }}
                />
              ),
              revenue: "$12.8K",
              costToServe: "$0.8K",
              margin: "$7.2K",
              impactedDemand: 80,
            },
          ]}
          options={{
            sorting: true,
            search: false,
            paging: false,
            fixedColumns: {
              left: 2,
            },
          }}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
