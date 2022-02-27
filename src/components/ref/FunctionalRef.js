// useRef() : is hook
// 1. to DOM access.
// 2. to store the value of pervious state!
import {useEffect, useRef} from "react";

// 1:
const FunctionalRef = () => {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return ( <input type="text" ref={inputRef}/>);
}

// 2:

export default FunctionalRef;
 
