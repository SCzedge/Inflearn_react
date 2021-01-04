import { useEffect } from "react";
import { addKeyObserver } from "../util/keyboard";

export default function useMoveTile(){
    useEffect(()=> {
        addKeyObserver('up',()=>{});
        addKeyObserver('down',()=>{});
        addKeyObserver('left',()=>{});
        addKeyObserver('right',()=>{});
    });
}