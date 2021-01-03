// 훅 호출시 순서와 회수가 가변적이어서는안됨.
//훅 호출 규칙 위반
function MyComponent(){
    const [value,steValue] = useState(0);
    if(value === 0){
        const [vi,setV1] = useState(0);
    }else{
        const [v1, setV1] = useState(0);
        const[v2, setV2] = useSteate(0);
    }

    for (let i = 0; i<value; i++){
        const [num, setNum] = useSteate(0);
    }
    function func1(){
        const[unm,setNum] = useState(0);
    }
}