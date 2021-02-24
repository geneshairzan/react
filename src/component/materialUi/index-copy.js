import React, { useState, useEffect } from "react";
import Layout from "./responsiveLayout";
import Button2 from "./button";
import { Button } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Btn from "element/button";
import { useStyles } from "component/theme/def";
import Stepper from "./stepper";
import { data } from "./master";

export default function FullWidthGrid(props) {
  const classes = useStyles(props);
  const locale = data;
  // console.log(css);
  return (
    <React.Fragment>
      {/* <div className={classes.fred}>tes</div>
      <Box height={200}>genesha</Box>
      <Button variant="contained" className="classes.fred">
        cancel
      </Button>

      <div className="test-flex">
        <div className="bg-orange vw-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ipsum
          quis omnis, error libero ex odit impedit accusamus tempora, delectus
          dicta, quod hic ab modi non inventore? Tempora, iste libero.
        </div>

        <div className="bg-orange vw-200"></div>
        <div className="bg-orange vw-200"></div>
        <div className="bg-orange vw-200"></div>
        <div className="bg-orange vw-200"></div>
        <div className="bg-orange vw-200"></div>

        <div className="bg-orange vw-200"></div>

        <div className="bg-orange vw-200"></div>
      </div>

      <div>
        <Stepper />
      </div> */}
      <div>genesha</div>
    </React.Fragment>
  );
}
