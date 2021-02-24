import React, { useState, useReducer } from "react";
import Context from "./contextInit";
import { initialState, ThemeReducer } from "./themesReducer";

export default function App(props) {
  const [user, setUser] = useState({
    name: "genesha",
    title: "title",
  });
  const [theme, action] = useReducer(ThemeReducer, initialState);

  return (
    <Context.Provider
      value={{
        user,
        theme,
        action,
        setName: (data) => {
          setUser({ ...user, name: data });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
