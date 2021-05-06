import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.scss";

export default function introducer(props) {
  return (
    <>
      <div className="container">
        <div className="container-layout-home">
          <Grid container className="layout-lab-main-product" spacing={2}>
            <h3>Thành Viên Ban Chủ Nhiệm CLB</h3>
            <Grid
              className="layout-lab-main-product-column"
              container
              spacing={10}
            >
                {props.show}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
