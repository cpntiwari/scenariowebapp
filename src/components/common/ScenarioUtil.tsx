import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PinImage from "../../images/pin-icon.png";
import { Grid } from "@material-ui/core";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import UpDownArrow from "../../images/up-down-arrow.png";

export const tableIcons = {
  Add: forwardRef((props: any, ref: any) => <AddBox {...props} {...ref} />),
  Check: forwardRef((props, ref) => <Check {...props} {...ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} {...ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} {...ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} {...ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} {...ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} {...ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} {...ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} {...ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} {...ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} {...ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} {...ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} {...ref} />),
  Search: forwardRef((props, ref) => <Search {...props} {...ref} />),
  SortArrow: forwardRef((props, ref) => (
    <img alt="Sort" className="sortIcon" src={UpDownArrow}></img>
  )),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} {...ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} {...ref} />),
};

export const RenderColumn = (props: any) => {
  return (
    <Grid container>
      {props.field === "scenario" &&
      props.rowData[props.field].default === 1 ? (
        <Grid item xs={12}>
          {props.rowData[props.field].value}{" "}
          {props.rowData[props.field].variance}
          <Grid
            item
            xs
            style={{
              float: "right",
            }}
          >
            <img alt="pin" src={PinImage} className="pinStyle"></img>
          </Grid>
        </Grid>
      ) : (
        <>
          {props.positive === 1 ? (
            <>
              <Grid item xs={4}>
                ${props.rowData[props.field].value}
              </Grid>
              <span style={{ color: "#008000" }} className="up-text">
                {props.rowData[props.field].variance}%
                <PlayArrowIcon className="down-play-icon"></PlayArrowIcon>{" "}
              </span>
            </>
          ) : props.positive === 2 ? (
            <>
              <Grid item xs={4}>
                ${props.rowData[props.field].value}
              </Grid>
              <span style={{ color: "#a32127" }} className="down-text">
                {props.rowData[props.field].variance}%
                <PlayArrowIcon className="up-play-icon"></PlayArrowIcon>{" "}
              </span>
            </>
          ) : (
            <Grid item xs={12}>
              {props.rowData[props.field].value}
            </Grid>
          )}
        </>
      )}
    </Grid>
  );
};

export const CreateColumn = (
  customTitle: string,
  customField: string,
  customType: string,
  customHeaderAlign: string,
  customCellAlign: string,
  customPositive: number
) => ({
  title: customTitle,
  field: customField,
  type: customType,
  width: "160px",
  headerStyle: { textAlign: customHeaderAlign, color: "#A19F9F" },
  customSort: (
    a: { [x: string]: { value: number } },
    b: { [x: string]: { value: number } },
    field: string | number
  ) => {
    return a[customField].value - b[customField].value;
  },
  cellStyle: {
    color: "#5C5656",
    textAlign: customCellAlign,
  },
  render: (rowData: any) => (
    <RenderColumn
      rowData={rowData}
      field={customField}
      positive={customPositive}
    ></RenderColumn>
  ),
});
export const scenarioColumns = [
  {
    title: "SCENARIO",
    field: "scenario",
    type: "string",
    width: "160px",
    cellStyle: {
      color: "#5C5656",
      textAlign: "left",
      width: "160px",
    },
    headerStyle: { textAlign: "left", color: "#A19F9F" },
    customSort: (
      a: { scenario: { value: string | any[] } },
      b: { scenario: { value: string | any[] } }
    ) => a.scenario.value.length - b.scenario.value.length,
    render: (rowData: { [x: string]: { diff: any } }) => (
      <RenderColumn
        rowData={rowData}
        field="scenario"
        positive={rowData["scenario"].diff}
      ></RenderColumn>
    ),
  },
  {
    title: "SCORE",
    field: "score",
    type: "string",
    width: "90px",
    headerStyle: { width: "90px", textAlign: "left", color: "#A19F9F" },
    customSort: (
      a: { score: { value: number } },
      b: { score: { value: number } }
    ) => a.score.value - b.score.value,
    cellStyle: {
      backgroundColor: "#e1f5f8",
      color: "#5C5656",
      fontWeight: "bold",
      textAlign: "right",
      borderRight: "2px solid #000",
      width: "90px",
    },
    render: (rowData: { [x: string]: { diff: any } }) => (
      <RenderColumn
        rowData={rowData}
        field="score"
        positive={rowData["score"].diff}
      ></RenderColumn>
    ),
  },
]