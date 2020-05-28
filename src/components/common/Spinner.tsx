import * as React from 'react';
import Loader from 'react-loader-spinner';
import { Grid } from '@material-ui/core';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Spinner = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item>
                <Loader type="ThreeDots" height={50} width={50} />
            </Grid>
        </Grid>
    );
};