import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import Imgcrop from "component/GnImgCrop";
import axios from "axios";

export default function App(props) {
  const [data] = useState(props.data);
  const { register, handleSubmit, errors, control } = useForm();
  const classes = useStyles();
  const [croppedImg, setcroppedImg] = useState();

  const handleClose = () => {
    props.onClose(true);
  };

  const onSubmit = (submitedData) => {
    // console.log("submit", submitedData);
    axios
      .post(
        "http://localhost/chrome2/api/v1/bookmark/do_edit_bookmark ",
        submitedData
      )
      .then((res) => {
        // console.log(res);
        props.onClose(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleImgCrop(data) {
    // console.log("img croped");
    setcroppedImg(data);
    // console.log(data);
  }

  return (
    <React.Fragment>
      {/* {console.log(data)} */}
      <Modal
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className="self_center modal_card">
          <div className="btn-modal-close" onClick={() => handleClose()}>
            X
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="child-my-8">
            <TextField
              name="bookmarkId"
              defaultValue={data.id}
              className="dnone"
              inputRef={register}
            />

            <Controller
              as={TextField}
              name="BookmarkTitle"
              control={control}
              label="Bookmark title"
              defaultValue={data.name}
            />
            {errors.name && <span>This field is required</span>}

            <TextField
              name="BookmarkUrl"
              defaultValue={data.link}
              label="Bookmark link"
              inputRef={register({ required: true })}
            />
            {errors.link && <span>This field is required</span>}

            <input
              name="croped_icon"
              value={croppedImg}
              ref={register}
              label="select gropus"
              className="dnone"
            />

            {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}
            <select
              name="BookmarkGroup"
              ref={register({ required: "select one option" })}
              defaultValue={data.bookmark_group}
            >
              <option value="">select groups</option>
              <option value="1">App</option>
              <option value="2">Project</option>
              <option value="3">Resource</option>
              <option value="4">Tools</option>
              <option value="5">Ecommerce</option>
            </select>
            {errors.group && (
              <p style={{ color: "red" }}> {errors.group.message}</p>
            )}

            <Imgcrop
              isHidden="true"
              imgClass="img_sq_60"
              defImg={
                "http://localhost/chrome2/public/uploads/bookmark/" +
                data.favicon
              }
              onImgCroped={handleImgCrop}
            />

            <Button variant="contained" type="submit" className="mt-16">
              SAVE
            </Button>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
