import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import AppLayout from "view/layout/MasterLayout";
import BookmarkCard from "./card";

// const useStyles = makeStyles({

export default function App(props) {
  const url = "http://localhost/chrome2/api/v1/bookmark";
  // eslint-disable-next-line
  const [data, setData] = useState(null);
  const [isDataUpdated, setisDataUpdated] = useState(false);

  const fetchMyAPI = async () => {
    console.log("data fetching");

    return axios.get(url);
  };

  useEffect(() => {
    console.log("effect");
    !isDataUpdated && fetchData();
  }, [isDataUpdated]);

  function HandleDataUpdate(dataupdate) {
    setisDataUpdated(false);
  }

  const fetchData = async () => {
    console.log("data fetch");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setData(json);
      setisDataUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isDataUpdated) {
    return "data loading";
  }

  return (
    <AppLayout title="smartfren ">
      {console.log("render child")}
      {data && isDataUpdated && (
        <React.Fragment>
          <BookmarkCard data={data} isUpdated={HandleDataUpdate} />
        </React.Fragment>
      )}
    </AppLayout>
  );
}
