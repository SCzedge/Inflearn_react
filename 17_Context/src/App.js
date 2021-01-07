import React, { useContext, createContext, useState } from "react";
const UserContext = createContext({ username: "unknown", age: 0 });

export default function App() {
  const [user, setUser] = useState({ username:'mike', age:'0' });
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
  console.log("App render");
  return (
    <div>
      <UserContext.Provider value={user}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>up</button>
      </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo(function Profile() {
  console.log("Profile Render");
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  console.log("Greeting render");
  const {username} = useContext(UserContext);
  return <p>{`${username}_welcome`}</p>;
}
