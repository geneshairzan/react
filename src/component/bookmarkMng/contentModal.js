import React from "react";
import Tws from "genesha_reactv1";

const [modalStyle] = React.useState(getModalStyle);
const classes = useStyles();

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const moduleA = (
  <div style={modalStyle} className={classes.paper}>
    <h2 id="simple-modal-title">Text in a modal</h2>
    <p id="simple-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      <Tws />
    </p>
    <button onClick={() => handleClose()}>cancel</button>
    <button onClick={() => handleSubmit()}>submit</button>
  </div>
);
