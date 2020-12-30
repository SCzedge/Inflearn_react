import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <Counter />
      {ReactDOM.createPortal(
        <div>
          <p>hi</p>
          <p>react Programing</p>
        </div>,
        document.getElementById('something'),
      )}
    </div>
  );
}
