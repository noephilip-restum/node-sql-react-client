import React from 'react';
import { Grid, Typography, } from "@material-ui/core"

function App() {
  return (

    <Grid container style={{ height: "100vh", boxSizing: "border-box" }}>
      <Grid item lg={2} style={{ border: "solid 1px" }}>
        <Typography variant="h4">
          Chat list
        </Typography>
      </Grid>
      <Grid item lg={10} style={{ border: "solid 1px" }}>
        <div style={{ borderBottom: "solid 1px" }}>
          <h3>John Doe</h3>
        </div>
      </Grid>

    </Grid>
  );
}

export default App;
