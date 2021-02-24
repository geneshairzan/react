import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import AppLayout from "view/layout/MasterLayout";
import BookmarkCard from "./card";
import useAxios from "axios-hooks";

// const useStyles = makeStyles({

export default function App(props) {
  const url = "http://localhost/chrome2/api/v1/bookmark";
  const [{ data, loading, error }, refetch] = useAxios(url);

  function HandleDataUpdate() {
    refetch();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <AppLayout title="smartfren ">
      <React.Fragment>
        <BookmarkCard data={data} isUpdated={HandleDataUpdate} />
      </React.Fragment>
    </AppLayout>
  );
}
