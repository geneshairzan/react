import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

export default function App() {
  return (
    <div className="flex-col">
      <Button variant="contained" width={200}>
        Default
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
