import React,{useRef,useState}from 'react';

export default function App() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>text Show / hide</button>
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        move to text
      </button>
    </div>
  );
}
