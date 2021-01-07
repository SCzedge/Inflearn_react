import React,{ useContext } from "react";

function Greeting(){
    const setUser =useContext(SetUserContext);
    const { username,helloCount} = userContext(UserContext);
    return (
        <React.Fragment>
            <p>{` hi ${username}`}</p>
            <p>{`counting : ${helloCount}`}</p>
            <button onClick={()=> setUser({ username, helloCount: helloCount + 1})}>
                say hello
            </button>
        </React.Fragment>
    )
}