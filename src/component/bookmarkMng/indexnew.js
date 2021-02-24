import React, { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "axios-hooks";
import AppLayout from "view/layout/MasterLayout";
import BookmarkCard from "./card";

export default function App(props) {
  const [isDataUpdated, setisDataUpdated] = useState(true);
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost/chrome2/api/v1/bookmark"
  );

  function handleDataUpdate(dataupdate) {
    console.log("data update");
    refetch();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <AppLayout title="smartfren ">
      <React.Fragment>
        <div>isupdate:{isDataUpdated ? "true" : "false"}</div>
        <BookmarkCard data={data} isUpdated={handleDataUpdate} />
      </React.Fragment>
    </AppLayout>
  );
}
