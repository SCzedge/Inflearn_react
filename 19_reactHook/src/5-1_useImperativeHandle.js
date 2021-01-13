import { forwardRef, useImperativeHandle } from "react";

function Profile(_,ref){
    const [name, setname] = useState('mike');
    const [age,setAge] = useState(0);

    useImperativeHandle(ref,()=> ({
        addAge:value => setAge(age + value),
        getnameLength:() => name.length,
    }));
    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
        </div>
    );
}

export default forwardRef(Profile);