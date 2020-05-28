import * as React from 'react';
import MaterialTable from 'material-table';
import { Box, makeStyles, Theme, createStyles, TableContainer, Button, CircularProgress, Typography } from "@material-ui/core";
import { Tokens, Palette } from '@jda/lui-common-component-library';
import { Card, useFetch } from '@jda/lui-dashboard-scaffolding';
import { ScenarioConfiguration } from './ScenarioConfiguration';
import { ScenarioUserSettings } from './ScenarioUserSettings';
import { scenarioColumns, tableIcons, CreateColumn } from './ScenarioUtil';
import { ScenarioAdditionalCols } from './Types';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minHeight: theme.spacing(20),
        maxHeight: theme.spacing(50),
        minWidth: theme.spacing(50),
        maxWidth: theme.spacing(150),
        overflowY: "auto"
    },
    button: {
        "& > *": {
            margin: theme.spacing(0),
            fontSize: theme.typography.pxToRem(12),
            fontWeight: theme.typography.fontWeightBold,
            color: Palette.colors.blue["700"],
            textDecoration: "none",
            cursor: "pointer"
        },
    },
    rightToolbar: {
        float: "right",
        marginTop: theme.spacing(2)
    }
}));

interface ScenarioCardProps {
    model: Card<ScenarioConfiguration, ScenarioUserSettings>;
}
export const ScenarioCardComponent = ({ model }: ScenarioCardProps) => {
    const classes = useStyles();
    const userSettings = { ...model.defaultUserSettings, ...model.configuration };
    const { data, error, isLoading } = useFetch<any>(`${userSettings.url}`, userSettings.endpointScopes);
    const [columns, setColumns] = React.useState<any[]>(scenarioColumns);
    React.useEffect(() => {
        let baseColumns = columns;
        ScenarioAdditionalCols.map((item) => {
            return baseColumns.push(
                CreateColumn(
                    item.name,
                    item.field,
                    item.type,
                    item.headerAlign,
                    item.cellAlign,
                    item.diff
                )
            );
        });
        setColumns(baseColumns);
    }, []);
    const [icons] = React.useState<any>(tableIcons);
    return (
        <Box className={classes.root}>
            {error ? (
                <Typography variant="h5" component="div">
                    <Box id="error" color={Tokens.colors.lightTheme.errorMain}>
                        Error
          </Box>
                </Typography>
            ) : isLoading ? (
                <Box height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <CircularProgress variant="indeterminate" size="3rem" />
                </Box>
            ) : data && data.length > 0 && (
                <TableContainer>
                    <MaterialTable
                        columns={columns}
                        data={data}
                        icons={icons}
                        options={{
                            search: false,
                            showTitle: false,
                            toolbar: false,
                            paging: false,
                            sorting: true,
                            grouping: false,
                            draggable: false,
                            fixedColumns: {
                                left: 2,
                            },
                            rowStyle: (rowData) => ({
                                backgroundColor: rowData.tableData.checked ? Tokens.colors.lightTheme.actionHover : '',
                                pointerEvents: rowData.isDisabled ? 'none' : 'inherit'
                            }),
                        }}
                    />
                    <div className={classes.rightToolbar}>
                        <Button variant="outlined" className={classes.button} color="primary" >More Details</Button>
                    </div>       </TableContainer>)
            }
        </Box>
    )
}

ScenarioCardComponent.defaultProps = {
    model: {
        "configuration": {
            url: 'http://localhost:3200/rest/lsr/scenario',
            endpointScopes: []
        }
    }
}