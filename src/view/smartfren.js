import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "view/layout/MasterLayout";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  w200: {
    width: "200px",
  },
});

export default function App() {
  // eslint-disable-next-line
  const { register, handleSubmit, watch, errors } = useForm();
  // const [fKota, setFKota] = useState();
  // const [fNumber, setFNumber] = useState();
  const [data, setData] = useState();
  const [isError, setError] = useState(false);
  const [dataPage, setDataPage] = useState(1);
  const css = useStyles();

  // const [feedback, setFeedback] = useState();

  useEffect(() => {
    // FetchUserData();
  }, []);

  const onSubmit = (data) => {
    axios
      .get("http://localhost/lv_master_dev/smartfren", {
        params: {
          q: data.phonenumber,
          kota: data.kota,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((error) => {
        // setError(error.response.data.message);
        // console.log(isError);
      });
  };

  function HandleDataPaginate(event, value) {
    setDataPage(value);
  }

  return (
    <AppLayout title="smartfren ">
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="search flex-col wm-600">
            <select
              name="kota"
              id=""
              className="py-3"
              defaultValue=""
              ref={register({ required: true })}
            >
              <option value="" disabled={true}>
                Select Kota
              </option>

              <option value="1">Jakarta</option>
              <option value="2">Bandung</option>
              <option value="3">Bali</option>
            </select>
            <input
              type="text"
              name="phonenumber"
              placeholder="enter phone number"
              className="py-3"
              ref={register({ required: true })}
            />

            <button className="py-3">search</button>
          </div>
        </form>

        {data && (
          <div className="flex-col">
            <div className="data">
              {data.slice(dataPage - 1, dataPage + 10).map((item) => {
                return [
                  <div className="flex-row" key={item.phonenumber}>
                    <div className={css.w200}> {item.phonenumber}</div>
                    <div> action</div>
                  </div>,
                ];
              })}
            </div>
            <Pagination
              count={data.length / 10}
              shape="rounded"
              onChange={HandleDataPaginate}
              hidePrevButton
              hideNextButton
              className="flex-row"
            />
          </div>
        )}
      </React.Fragment>
    </AppLayout>
  );
}
