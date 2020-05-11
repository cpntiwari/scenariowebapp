import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(0),
                fontSize: theme.typography.pxToRem(12),
                fontWeight: theme.typography.fontWeightBold,
                color: "#0384fc",
                height: '28px'
            },
        },
    }),
);

export default function OutlinedButtons() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <button color="primary" type="button">
                More Details
              </button>
        </div>
    );
}