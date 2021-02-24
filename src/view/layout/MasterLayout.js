import React from "react";
// import { Link } from "react-router-dom";
import AppNavigation from "view/Navigation";

export default function AppLayout(props) {
  document.title = props.title;
  return (
    <>
      <div className="page_header">
        <h2>React App</h2>
      </div>
      <nav>
        <AppNavigation />
      </nav>
      <div className="page_content">{props.children}</div>
    </>
  );
}
