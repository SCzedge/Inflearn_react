import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Rooms from'./Rooms';



export default function App(){
    return (
      <BrowserRouter>
        <div style={{padding: 20, border: '5px solid gray'}}>
          <Link to="/">home</Link>
          <br/>
          <Link to ="/photo">photo</Link>
          <br/>
          <Link to="/rooms">rooms</Link>
          <br/>
          <Route exact path="/" component={Home}/>
          <Route path="/photo" component={Photo}/>
          <Route path="/rooms" component={Rooms}/>
        </div>
      </BrowserRouter>
    )
  }
  function Home(){
    return <h2>here is HomePage</h2>
  }
  function Photo(){
    return <h2>PhotoZone</h2>
  }
   