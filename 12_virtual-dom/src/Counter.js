import React,{useState} from'react';

export default function Counter(){
    const [count, setCount] = useState(0);
    function onClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <p>{`now count : ${count}`}</p>
            <button onClick={onClick}>up</button>
        </div>
    )
}