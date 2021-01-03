import React from "react";
import useUser from "./useUser";

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);
  /* 이러면안됨.
  if(!user){
    return null;
  }
  const [value,setValue]=useState(1); //훅 호출 규칙 위반.

  */
  return (
    <div>
      {!user && <p>updating....</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

 const USER1 = { name: "mike", age: 23 };
const USER2 = { name: "jake", age: 32 };
function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
