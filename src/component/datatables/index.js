import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import "i18n";

export default function App() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  // eslint-disable-next-line
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [data2, setData2] = useState();
  const [isError, setError] = useState(false);

  // const [feedback, setFeedback] = useState();

  useEffect(() => {
    FetchUserData();
  }, [setData2]);

  function FetchUserData() {
    axios
      .get("http://localhost/lv_master_dev/smartfren", {})
      .then((res) => {
        if (res.status === 200) {
          setData2(res.data);
        }
      })
      .catch((error) => {
        // setFeedback(error.response.data.message);
        setError(true);
      });
  }

  function handleNulled() {
    setData2(null);
    console.log("handle null");
  }

  const columns = [
    { name: "User" },
    { name: "Phone Number", value: "id" },
    { name: "Status" },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
  };

  if (!data2 && !isError) {
    return (
      <div>
        <p> "no data found"</p>
        <button onClick={FetchUserData}>re-fetching</button>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="pt-3"></div>
        <button onClick={handleNulled}>nulled</button>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Responsive Option
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={responsive}
            style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
            onChange={(e) => setResponsive(e.target.value)}
          >
            <MenuItem value={"vertical"}>vertical</MenuItem>
            <MenuItem value={"standard"}>standard</MenuItem>
            <MenuItem value={"simple"}>simple</MenuItem>

            <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
            <MenuItem value={"scrollMaxHeight"}>
              scrollMaxHeight (deprecated)
            </MenuItem>
            <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Table Body Height
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tableBodyHeight}
            style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
            onChange={(e) => setTableBodyHeight(e.target.value)}
          >
            <MenuItem value={""}>[blank]</MenuItem>
            <MenuItem value={"400px"}>400px</MenuItem>
            <MenuItem value={"800px"}>800px</MenuItem>
            <MenuItem value={"100%"}>100%</MenuItem>
          </Select>
        </FormControl>
        <MUIDataTable
          title={"Smartfren "}
          data={data2.map((item) => {
            return [item.owner, item.phonenumber, item.cd_status];
          })}
          columns={columns}
          options={options}
        />
      </React.Fragment>
    );
  }
}
