import React, { useContext } from "react";
import Context from "contextProvider/contextInit";

export default function FullWidthGrid(props) {
  const { user, setName, theme, action } = useContext(Context);

  const handleEdit = () => {
    setName("irzan");
    action({ type: "toggleTheme", data: "godata" });
  };

  return (
    <React.Fragment>
      <div>cur them :{theme.currentTheme.id}</div>
      <div>{user.name}</div>
      <div>{user.name}</div>

      <button onClick={handleEdit}>edit</button>
    </React.Fragment>
  );
}
