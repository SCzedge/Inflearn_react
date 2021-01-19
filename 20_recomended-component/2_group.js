import { useEffect } from "react";

function Profile({userId}){
    // 기능별로 모아두는것이 가독성향상, 커스텀훅 분리 편함
    const [user,setUser] = useState(null);
    useEffect(()=> {
        getUserApi(userId).the(data => setUser(data));
    },[userId]);
    
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(()=> {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',onResize);
        return () => {
            window.removeEventListener('resize',onResize);
        }
    },[]);
}