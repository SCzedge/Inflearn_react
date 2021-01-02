import React,{useState,useEffect} from 'react';
import App from './App';

export default function App() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        docuemnt.title=`update : ${count}`;
    });
    return <button onClick={() => setCount(count + 1)}>increase</button>
}