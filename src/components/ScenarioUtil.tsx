import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PinImage from "../images/pin-icon.png";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
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
import UpDownArrow from "../images/up-down-arrow.png";
import { Tokens, Palette } from "@jda/lui-common-component-library";

const useStyles = makeStyles((theme: Theme) => createStyles({
  sortIcon: {
    opacity: "0.5",
    marginLeft: theme.typography.pxToRem(4),
    height: theme.typography.pxToRem(10)
  },
  pinStyle: {
    backgroundColor: Tokens.colors.lightTheme.chartGreen,
    color: Tokens.colors.lightTheme.chartGreen
  },
  upText: {
    fontSize: Tokens.sizing.textSmall,
    verticalAlign: "middle"
  },
  downText: {
    fontSize: Tokens.sizing.textSmall,
    verticalAlign: "middle"
  },
  upPlayIcon: {
    fontSize: theme.spacing(2.4),
    transform: "rotate(90deg)",
    verticalAlign: "bottom"
  },
  downPlayIcon: {
    fontSize: theme.spacing(2.4),
    transform: "rotate(-90deg)",
    verticalAlign: "bottom",
  }
}));

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
  SortArrow: forwardRef(() => (
    <img alt="Sort" className={useStyles().sortIcon} src={UpDownArrow}></img>
  )),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} {...ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} {...ref} />),
};

export const RenderColumn = (props: any) => {
  const classes = useStyles();
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
              <img alt="pin" src={PinImage} className={classes.pinStyle}></img>
            </Grid>
          </Grid>
        ) : (
          <>
            {props.positive === 1 ? (
              <>
                <Grid item xs={6}>
                  ${props.rowData[props.field].value}
                </Grid>
                <Grid item xs={6} style={{ color: Tokens.colors.lightTheme.messageStatusGreen }} className={classes.upText}>
                  {props.rowData[props.field].variance}%
                <PlayArrowIcon className={classes.downPlayIcon}></PlayArrowIcon>{" "}
                </Grid>
              </>
            ) : props.positive === 2 ? (
              <>
                <Grid item xs={4}>
                  ${props.rowData[props.field].value}
                </Grid>
                <Grid item xs={8} style={{ color: Tokens.colors.lightTheme.errorMain }} className={classes.downText}>
                  {props.rowData[props.field].variance}%
                <PlayArrowIcon className={classes.upPlayIcon}></PlayArrowIcon>{" "}
                </Grid>
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
  headerStyle: { textAlign: customHeaderAlign, color: Tokens.colors.lightTheme.borderGrey },
  customSort: (
    a: { [x: string]: { value: number } },
    b: { [x: string]: { value: number } }
  ) => {
    return a[customField].value - b[customField].value;
  },
  cellStyle: {
    color: Tokens.colors.lightTheme.grey,
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
      color: Tokens.colors.lightTheme.grey,
      textAlign: "left",
      width: "160px",
    },
    headerStyle: { textAlign: "left", color: Tokens.colors.lightTheme.borderGrey },
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
    headerStyle: { width: "90px", textAlign: "left", color: Tokens.colors.lightTheme.borderGrey },
    customSort: (
      a: { score: { value: number } },
      b: { score: { value: number } }
    ) => a.score.value - b.score.value,
    cellStyle: {
      backgroundColor: Palette.colors.green["100"],
      color: Tokens.colors.lightTheme.grey,
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