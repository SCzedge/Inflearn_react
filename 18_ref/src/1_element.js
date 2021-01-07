import React, { userRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button> save </button>
    </div>
  );
}
