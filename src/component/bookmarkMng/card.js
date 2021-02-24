import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import EditBookmark from "./edit";

export default function App(props) {
  const [data, setData] = useState(props.data);
  const [dataPage, setDataPage] = useState(1);
  const [editOpen, seteditOpen] = useState(false);
  const [dataEdit, setdataEdit] = useState(null);

  const HandleEdit = (data) => {
    setdataEdit(data);
    seteditOpen(true);
  };

  function HandleDataPaginate(event, value) {
    setDataPage(value);
  }

  function handleModalChange(data) {
    seteditOpen(!data);
    setdataEdit(null);
    props.isUpdated(false);
  }
  useEffect(() => {
    // console.log("child render");
    setData(props.data);
  }, [props.data]);

  if (!data) {
    return " loading . . . ";
  }

  return (
    <React.Fragment>
      <div>edit open: {editOpen ? "open" : "close"}</div>
      {data.slice(dataPage - 1, dataPage + 10).map((item) => {
        return (
          <Grid container spacing={1} key={item.id}>
            <Grid item xs />
            <Grid item xs={1}>
              <Box width={64} height={64} className="box">
                <img
                  src={
                    "http://localhost/chrome2/public/uploads/bookmark/" +
                    item.favicon
                  }
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs>
              <div
                className="flex-col"
                style={{ width: "400px", overdlow: "hidden" }}
              >
                <div>{item.name}</div>
                <div>{item.link}</div>
                <div>{item.bookmark_groups.groupname}</div>

                <div className="flex-row g8 fh-left">
                  <button
                    type="button"
                    className="h24"
                    onClick={() => HandleEdit(item)}
                  >
                    Edit
                  </button>
                  <button className="h24">Del</button>
                </div>
              </div>
            </Grid>
            <Grid item xs />
          </Grid>
        );
      })}
      <div className="flex-col">
        <div></div>
        <Pagination
          count={data.length / 10}
          shape="rounded"
          onChange={HandleDataPaginate}
          hidePrevButton
          hideNextButton
          className="flex-row"
        />
      </div>
      <React.Fragment>
        {dataEdit && (
          <EditBookmark
            isOpen={editOpen}
            data={dataEdit}
            onClose={handleModalChange}
          />
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
