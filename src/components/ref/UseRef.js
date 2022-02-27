import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [inputValue, setInputValue] = useState("");
    // const inputRef = useRef();
    const prevValue = useRef();
    const [count, setCount] = useState(0);
    const prevCount = useRef();
    
    // when DOM loaded focus on input:
    useEffect(()=>{
        // inputRef.current.focus();
        prevValue.current = inputValue //ref updating in useEffect() Does not re-render component
    },[inputValue])

    useEffect(()=>{
        prevCount.current = count;
    },[count])

    const changeHandler = (e)=>{
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    // when Reset-btn clicked focus on input:
    const resetHandler = ()=>{
        setInputValue("");
        // inputRef.current.focus();
    }
    return ( 
        <div>
            <input type="text" 
                value={inputValue} 
                // ref={inputRef} 
                onChange={changeHandler}
                />
            <button onClick={resetHandler}>Reset</button>
            <p>
                my name is {inputValue} <br/>
                and it used to be {prevValue.current}
            </p>
            <div>
                <button onClick={()=>setCount(Math.ceil(Math.random()*100))}>generate random</button>
                <p>count: {count}</p>
                <p>prevCount: {prevCount.current}</p>
            </div>
        </div>
     );
}
 
export default UseRef;