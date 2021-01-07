import React, {createContext} from 'react';

const UserContext = createContext('unknown');

export default function App(){
    return(
        <div>
        <UserContext.Provider value="mike">
        <div>top menu</div>
        <Profile/>
        <div>bottom Menu</div>
        </UserContext.Provider>
        </div>
    );
}

function Profile(){
    return (
        <div>
            <Greeting/>
        </div>
    );
}

function Greeting(){
    return (
        <UserContext.Consumer>
            {userName=> <p>{`${username}_welcome`}</p>}
        </UserContext.Consumer>
    )
}

