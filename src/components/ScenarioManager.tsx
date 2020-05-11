import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, makeStyles, Theme, createStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { SortableTable } from './common/SortableTable';
import { EmptyProps } from '../common/types';

const theme = createMuiTheme({
    overrides: {
        MuiTableHead: {
            root: {
                borderTop: "1px solid #f2f2f2",
            },
        },
        MuiPaper: {
            elevation1: {
                boxShadow: 'none',
            },
            elevation2: {
                boxShadow: 'none',
            }
        },
    },
});
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightBold,
        },
        expanded: {
            margin: "0 auto"
        }
    }),
);
export const ScenarioManager: React.SFC<EmptyProps> = () => {
    const classes = useStyles();
    return (
        <ExpansionPanel defaultExpanded={true}
            classes={{ expanded: classes.expanded }} >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Scenario Manager</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <MuiThemeProvider theme={theme}>    <SortableTable></SortableTable></MuiThemeProvider>
            </ExpansionPanelDetails>
        </ExpansionPanel >
    )
}