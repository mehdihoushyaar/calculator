import React from "react";
import "./Button.css";

export default function Button({ children, handleClick }) {
  let className = "";
  if (!isNaN(children) || children === "=" || children === ".") {
    className = "btn";
  } else {
    className = "btn operator";
  }
  return (
    <button className={className} onClick={() => handleClick(children)}>
      {children}
    </button>
  );
}
