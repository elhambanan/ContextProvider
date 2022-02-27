import { useEffect, useState } from "react";

const FunctionalTimer = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("hi eli");
            setCount(count +1)
        },1500);
        return () => {
            clearInterval(interval);
        }
    },[]);
    
    return ( 
        <div>
            Functional Timer with setInterval Function
        </div>
     );
}
 
export default FunctionalTimer;