const FRIENDS = [
  { name: "tzuy", age: 15 },
  { name: "suzy", age: 20 },
  { name: "IU", age: 25 },
  { name: "yunaKim", age: 30 },
];
let nextId = 0;
export function getNextFriend() {
  return { ...FRIENDS[nextId % 4], id: nextId++ };
}
