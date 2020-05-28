import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import OutlinedButtons from "./MoreButton";
import { CreateColumn, tableIcons, scenarioColumns } from "./ScenarioUtil";
import { ScenarioAdditionalCols, EmptyProps } from "../../common/types";
import { Config } from "../../common/config";
import { Spinner } from "./Spinner";
import { ErrorDetails } from "./ErrorDetails";
import { NoRecords } from "./NoRecords";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "& > *": {
        margin: theme.spacing(1),
        cursor: "pointer"
      },
      width: theme.spacing(10)
    },
    rightToolbar: {
      float: "right",
    },
    a: {
      textDecoration: 'none'
    },
  })
);


export const SortableTable: React.FC<EmptyProps> = () => {
  const classes = useStyles();
  const [result, setResult] = useState<any[]>();
  const [columns, setColumns] = useState<any[]>(scenarioColumns);
  const [icons] = useState<any>(tableIcons);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
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

  useEffect(() => {
    fetch(Config.API_BASE_URL + Config.BASE_METHOD)
      .then((response) => response.json())
      .then((response) => {
        try {
          if (response.statusCode === 401 || response.statusCode === 403) {
            setError("Un-authorized Error");
          } else {
            setResult(response);
          }

        } catch (error) {
          setError(error);
        }
        finally {
          setIsLoading(false);
        }
      })
      .catch((error) => { setError(error); setIsLoading(false); });
  }, []);

  return (
    <>
      {isLoading ?
        (<Spinner></Spinner>)
        : error && error.length > 0 ?
          (<ErrorDetails error={error}></ErrorDetails>)
          : result && (<div className={classes.root}>
            {result && result.length > 0 ?
              (<><MaterialTable
                icons={icons}
                columns={columns}
                data={result}
                options={{
                  exportButton: true,
                  sorting: true,
                  search: false,
                  paging: false,
                  fixedColumns: {
                    left: 2,
                  },
                  toolbar: false
                }}
              /> <section className={classes.rightToolbar}>
                  <Link className={classes.a} to="/scenarioDetails">
                    <OutlinedButtons></OutlinedButtons>
                  </Link>
                </section></>)
              : (<NoRecords></NoRecords>)}
          </div>)}</>)
};