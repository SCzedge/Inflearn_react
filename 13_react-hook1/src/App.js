import React,{useState} from "react";
import Profile from'./5-1_useEffect-api';

export default function App() {
  const [userId,setUserId] = useState(0);
  return(
    <>
    <Profile userId = {userId}/>
    <button onClick={() => setUserId(userId +1)}>changeing user Id</button>
    </>
  )
}
