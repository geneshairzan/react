import React, { useState, useEffect } from "react";

export default function App(props) {
  console.log(props);
  return (
    <React.Fragment>
      <div>{props.title}</div>
    </React.Fragment>
  );
}
