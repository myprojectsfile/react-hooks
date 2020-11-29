import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [inputHistory, SetInputHistory] = useState([]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
          SetInputHistory([...inputHistory, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr />
      <ul>
        {inputHistory.map((hist) => {
          return <div>{hist}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
