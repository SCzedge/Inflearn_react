import React,{useContext,createContext} from 'react';
const UserContext = createContext({username:'unknown',age:0});

export default function App(){
    const[username,setusername] = useState('');
    const [ age,setAge] = useState(0);
    const[count,setCount]=useState(0);
    return(
        <div>
            <UserContext.Provider value={{username,age}}>
                <Profile/>
                <button onClick={() => setCount(count + 1)}>up</button>
            </UserContext.Provider>
        </div>
    )
}