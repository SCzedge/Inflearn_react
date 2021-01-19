import React from 'react';
import User from './User';


export default function App() {
  return <div>
    <p>hello world</p>
    <User onChangeTitle={()=> {}} male={true} type={'gold'} />
  </div>;
}

