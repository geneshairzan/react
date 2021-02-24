import React, { useState, useEffect } from "react";
import css from "./react-step-flow.module.css";

export function Steps(props) {
  const [active, setActive] = useState(props.setActive);

  return (
    <div className={css.container}>
      {props.children.map((item, index) => {
        return (
          <Step
            id={index}
            key={index}
            active={index === active}
            activeindex={active}
            onClick={setActive}
          >
            {item}
          </Step>
        );
      })}
    </div>
  );
}

export function Step(props) {
  return (
    <div className={`${css.card}`}>
      <div
        className={`${css.square}  ${
          props.id <= props.activeindex && css.active
        } ${props.active && css.current} ${css.ease}`}
      ></div>
      <div
        className={`${css.cardBodyContainer} ${css.shadow1} ${
          props.active && css.active
        }`}
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        <div className={`${css.cardBody}`}>{props.children}</div>
      </div>
    </div>
  );
}
