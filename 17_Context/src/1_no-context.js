import React from 'react';

export default function App() {
  return(
    <div>
      <div>upper menu</div>
      <Profile username="Mike"/>
      <div>bottom menu</div>
    </div>
  )
}
function Profile({username}){
  return(
    <div>
      <Greeting username={username}/>
    </div>
  )
}

function Greeting({username}){
  return <p>{`${username}_welcome`}</p>
}