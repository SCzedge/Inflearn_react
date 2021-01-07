import React, { createContext, useContext, useState } from "react";

const UserContext = createContext("unknown");
const ThemeContext = createContext("dark");

export default function App() {
  const [name, setName] = useState("mike");
  const [theme, setTheme] = useState("dark");
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={name}>
          <div>top menu</div>
          <Profile />
          <div>bottom Menu</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </UserContext.Provider>
      </ThemeContext.Provider>
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
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  //   return <p>{`${username}_welcome`}</p>;
  return (
    <p style={{ color: theme === "dark" ? "gray" : "green" }}>
      {`${username}_welcome`}
    </p>
  );
}
