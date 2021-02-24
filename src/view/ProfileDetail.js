import React from "react";
import AppLayout from "view/layout/MasterLayout";

// import { BrowserRouter, Route, Switch } from "react-router-dom";

function ProfilDetail(props) {
  console.log(props);
  if (!props.location.state) return "error";

  const name = props.match.params.name;
  const fullName = props.location.state.name;
  const bornDate = props.location.state.born;

  return (
    <AppLayout title="home">
      <h2>Hi, {name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>
        {fullName} was born on{" "}
        {new Date(bornDate).toLocaleDateString("en", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <button onClick={() => props.history.goBack()}>back</button>
    </AppLayout>
  );
}

export default ProfilDetail;
