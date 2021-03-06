import React from 'react';
import {Route,Link} from 'react-router-dom';

export default function Rooms({match}){
return (
    <div>
        <h2> room Page</h2>
        <Link to={`${match.url}/blueRoom`}>blueRoom</Link>
        <br/>
        <Link to={`${match.url}/greenRoom`}>greenRoom</Link>
        <br/>
        <Route path={`${match.url}/:roomId`} component={Room}/>
        <Route 
            exact
            path={match.url}
            render={() => <h3>please choose the room</h3>}
        />
    </div>
)
}
function Room({match}){
    return <h2>{`${match.params.roomId} is what you choose`}</h2>
}