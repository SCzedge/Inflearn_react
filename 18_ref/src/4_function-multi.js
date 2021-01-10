import Rect, { useContext, createContext, useState,useRef } from "react";

export default function App() {
    const boxListRef = useRef({});
    // boxListRef.current = 0;
    function onClick(){
        let maxRight=0;
        let maxId='';
        for(const box of BOX_LIST){
            const ref = boxListRef.current[box.id];
            if(ref){
                const rect = ref.getBoundingClientRect();
                if(maxRight<rect.right){
                    maxRight = rect.right;
                    maxId=box.id;
                }
            }
        }
        alert(`${maxId} is rightest`)
    }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          height: "100%",
        }}
      >
        {BOX_LIST.map((item) => (
          <div
            key={item.id}
            ref={ref => (boxListRef.current[item.id]=ref)}
            style={{
              flex: "0 0 auto",
              width: item.width,
              height: 100,
              backgroundColor: "yellow",
              border: "solid 1px red",
            }}
          >{`box_${item.id}`}</div>
        ))}
      </div>
      <button onClick={onClick}>which one is Rightest?</button>
    </div>
  );
}
const BOX_LIST=[
    {id: 1, width: 70},
    {id: 2, width: 100},
    {id: 3, width: 80},
    {id: 4, width: 100},
    {id: 5, width: 90},
    {id: 6, width: 60},
    {id: 7, width: 120},
]