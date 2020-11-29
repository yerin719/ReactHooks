import React, { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialValiue) => {
  const [title, setTitle] = useState(initialValiue);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const changeTitle = useTitle("loading");
  setTimeout(() => changeTitle("Home"), 3000);
  return <div className="App">Hi</div>;
}
