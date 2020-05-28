import { Grid } from "@material-ui/core"
import React from "react"

export const ErrorDetails = (props: { error: React.ReactNode }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={3}>
                {props.error}
            </Grid>
        </Grid>
    )
}