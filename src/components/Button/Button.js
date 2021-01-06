import React from "react";
import "./Button.css";

const Button = ({ props, type, onButtonClick }) => {
  return <div onClick={onButtonClick(props)} className={`button ${type ||""}`}
  >{props}</div>;
}

export default Button;
