import React from "react";
import "./styles.css";

const usePrevantLeave = () => {
  const prevent = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", prevent);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", prevent);
  };
  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePrevantLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>enablePrevent</button>
      <button onClick={disablePrevent}>disablePrevent</button>
    </div>
  );
}
