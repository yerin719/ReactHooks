import React from "react";
import "./styles.css";

const useConfirm = (message = "", acceptCallback, rejectCallback) => {
  const confirmAction = () => {
    if (confirm(message)) acceptCallback();
    else rejectCallback();
  };
  return confirmAction;
};

export default function App() {
  const Delete = () => console.log("boom");
  const Save = () => console.log("Tada");

  const checkSure = useConfirm("진짜?", Delete, Save);
  return (
    <div className="App">
      <button onClick={checkSure}>del</button>
    </div>
  );
}
