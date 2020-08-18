import React from "react";
import "./InputContainer.css";

export default function InputContainer({
  final,
  temp,
  finalReset,
  tempReset,
  backspace,
}) {
  return (
    <div className="InputContainer">
      <p onDoubleClick={finalReset}>{final == "" ? "0" : final}</p>
      <hr />
      <h3 onDoubleClick={tempReset} onClick={backspace}>
        {temp}
      </h3>
    </div>
  );
}
