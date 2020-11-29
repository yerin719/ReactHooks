import React, { useState } from "react";
import "./styles.css";

const useInput = (initialVal, validator) => {
  const [value, setValue] = useState(initialVal);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") willUpdate = validator(value);
    if (willUpdate) setValue(value);
  };
  return { value, onChange };
};

export default function App() {
  const maxlen = (value) => value.length < 10;
  const argument = useInput("MR.", maxlen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input {...argument} />
    </div>
  );
}

