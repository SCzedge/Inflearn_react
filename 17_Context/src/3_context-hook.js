import React, {createContext,useContext,useState} from 'react';

const UserContext = createContext('unknown');

export default function App(){
    const[name,setName] = useState('mike');
    return(
        <div>
        <UserContext.Provider value={name}>
        <div>top menu</div>
        <Profile/>
        <div>bottom Menu</div>
        <input type="text"value={name} onChange={e=> setName(e.target.value)}/>
        </UserContext.Provider>
        </div>
    );
}

const Profile = React.memo(function Profile(){
    console.log('Profile Render');
    return (
        <div>
            <Greeting/>
        </div>
    );
});

function Greeting(){
    const username=useContext(UserContext);
    return <p>{`${username}_welcome`}</p>
}