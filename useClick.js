import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => console.log("hello");
  const Ref = useClick(sayHello);
  return (
    <div ref={Ref} className="App">
      Hi
    </div>
  );
}
