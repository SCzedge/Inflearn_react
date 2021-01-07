import React, { useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef();
  useEfffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <InputAndSave ref={inputRef} />
      <Button ref={buttonRef} />
      <button onClick={() => inputRef.current.focus()}>move to text</button>
    </div>
  );
}
function InputAndSave({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>save</button>
    </div>
  );
}
const Button = React.forwardRef(function ({ onClick }, ref) {
  return (
    <button onClick={onClick} ref={ref}>
      save
    </button>
  );
});
