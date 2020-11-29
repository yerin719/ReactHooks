import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "section1",
    content: "This is the content of the section1"
  },
  {
    tab: "section2",
    content: "This is the content of the section2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  return {
    currentItem: allTabs[currentIdx].content,
    changeItem: setCurrentIdx
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)}>{section.tab}</button>
      ))}
      <div>{currentItem}</div>
    </div>
  );
}
