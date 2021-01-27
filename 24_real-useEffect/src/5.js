useEffcet(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);
 
/*
부수효과 함수는 함수만 반환할수있음.
await는 promise객체를 반환하기때문에
부수효과 함수가 될 수 없음.
*/