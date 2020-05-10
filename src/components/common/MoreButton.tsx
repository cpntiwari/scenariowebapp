import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                fontSize: theme.typography.pxToRem(12),
                fontWeight: theme.typography.fontWeightBold,
                color:"#0384fc"
            },
        },
    }),
);

export default function OutlinedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
                More Details
      </Button>
        </div>
    );
}