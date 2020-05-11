import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import OutlinedButtons from './MoreButton';
import { RenderColumn, CreateColumn, tableIcons } from './ScenarioUtil';
import { ScenarioAdditionalCols, EmptyProps } from '../../common/types';
import { Config } from '../../common/config';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            '& > *': {
                margin: theme.spacing(1),
            }
        },
        rightToolbar: {
            float: "right"
        }
    }),
);

const scenarioColumns = [
    {
        title: 'SCENARIO',
        field: 'scenario',
        type: 'string',
        width: "175px",
        defaultSort: "asc",
        cellStyle: {
            color: "#000",
            textAlign: "left",
            width: "175px",
        },
        headerStyle: { textAlign: 'left' },
        customSort: (a: { scenario: { value: string | any[]; }; }, b: { scenario: { value: string | any[]; }; }) => a.scenario.value.length - b.scenario.value.length,
        render: (rowData: { [x: string]: { diff: any; }; }) => (
            <RenderColumn rowData={rowData} field='scenario' positive={rowData['scenario'].diff}></RenderColumn>
        )
    },
    {
        title: 'SCORE', field: 'score', type: 'string',
        width: "100px",
        headerStyle: { textAlign: 'left' },
        customSort: (a: { score: { value: number; }; }, b: { score: { value: number; }; }) => a.score.value - b.score.value,
        cellStyle: {
            backgroundColor: "#e1f5f8",
            color: "#000",
            fontWeight: "bold",
            textAlign: "right",
            borderRight: "1px solid #000",
            width: "100px",
        }, render: (rowData: { [x: string]: { diff: any; }; }) => (
            <RenderColumn rowData={rowData} field='score' positive={rowData['score'].diff} ></RenderColumn>
        ),
    }
]

export const SortableTable: React.FC<EmptyProps> = () => {
    const classes = useStyles();
    const [result, setResult] = useState({ status: "loading", records: [] });
    const [columns, setColumns] = useState<any[]>(scenarioColumns);
    const [selectedRow, setSelectedRow] = useState<any>();
    const [icons,] = useState<any>(tableIcons)

    useEffect(() => {
        let baseColumns = columns;
        ScenarioAdditionalCols.map((item) => {
            return baseColumns.push(CreateColumn(item.name, item.field, item.type, item.headerAlign, item.cellAlign, item.diff))
        })
        setColumns(baseColumns);
    }, [])

    useEffect(() => {
        fetch(Config.API_BASE_URL + Config.BASE_METHOD).then(response => response.json())
            .then(response => {
                if (response.statusCode === 401 || response.statusCode === 403) {
                    setResult({ status: "error", records: [] })
                }
                else {
                    setResult({ status: "loaded", records: response });
                }
            })
            .catch(error => setResult({ status: "error", records: [] }));
    }, [])

    return (
        <>
            <div className={classes.root} style={{ width: '100%' }}>
                <MaterialTable
                    icons={icons}
                    columns={columns}
                    data={result.records}
                    onRowClick={((evt, selectedRow) => setSelectedRow({ selectedRow }))}
                    options={{
                        sorting: true,
                        search: false,
                        paging: false,
                        fixedColumns: {
                            left: 2
                        },
                        toolbar: false,
                        rowStyle: rowData => ({
                            backgroundColor: (selectedRow && selectedRow.selectedRow && selectedRow.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                        })
                    }}
                />
                {
                    result && result.records && result.records.length > 0 && (
                        <section className={classes.rightToolbar}>
                            <NavLink to="/scenarioDetails">
                                <OutlinedButtons></OutlinedButtons>
                            </NavLink>
                        </section>
                    )
                }
            </div>
        </>
    );
}