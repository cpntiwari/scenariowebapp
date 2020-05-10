import MaterialTable, { Column } from 'material-table';
import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import OutlinedButtons from './MoreButton';
import { RenderColumn, CreateColumn, tableIcons } from './ScenarioUtil';
import { ScenarioAdditionalCols } from '../../common/types';
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
        cellStyle: {
            color: "#000",
            textAlign: "left",
            width: "175px",
        },
        headerStyle: { textAlign: 'left' },
        customSort: (a: { scenario: any; }, b: { scenario: any; }) => a.scenario.value.length - b.scenario.value.length,
        render: (rowData: any) => (
            <RenderColumn rowData={rowData} field='scenario' positive={rowData['scenario'].diff}></RenderColumn>
        )
    },
    {
        title: 'SCORE', field: 'score', type: 'string',
        width: "100px",
        headerStyle: { textAlign: 'left' },
        customSort: (a: { score: any; }, b: { score: any; }) => a.score.value - b.score.value,
        cellStyle: {
            backgroundColor: "#e1f5f8",
            color: "#000",
            fontWeight: "bold",
            textAlign: "right",
            borderRight: "1px solid #000",
            width: "100px",
        }, render: (rowData: any) => (
            <RenderColumn rowData={rowData} field='score' positive={rowData['score'].diff} ></RenderColumn>
        ),
    }
]

export const SortableTable: React.FC<{}> = () => {
    const classes = useStyles();
    const [result, setResult] = useState({ status: "loading", records: [] });
    const [columns, setColumns] = useState<any[]>(scenarioColumns);
    const [selectedRow, setSelectedRow] = useState<any>();
    const [icons, setIcons] = useState<any>(tableIcons)

    useEffect(() => {

        fetch('http://localhost:4000/scenarios').then(response => response.json())
            .then(response => {
                if (response.statusCode === 401 || response.statusCode === 403) {
                    setResult({ status: "error", records: [] })
                }
                else {
                    ScenarioAdditionalCols.map((item) => {
                        columns.push(CreateColumn(item.name, item.field, item.type, item.headerAlign, item.cellAlign, item.diff))
                    })
                    setColumns(columns);
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
                <section className={classes.rightToolbar}>
                    <OutlinedButtons></OutlinedButtons>
                </section>
            </div>
        </>
    );
}