import { Grid } from "@material-ui/core"
import React from "react"

export const NoRecords = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={3}>
                No record to display
          </Grid>
        </Grid>
    )
}