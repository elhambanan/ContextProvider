import React, { useContext, useReducer } from "react";

const CounterContext = React.createContext(); //state
const CounterContextDispacher = React.createContext(); //setState

const initialState = 0;
const reducer = (state, action) => {
    switch(action.type){
        case "add":
            return state + action.value ;
        case "decrement":
            return state - action.value ; 
        case "reset" :   
            return initialState;    
        default: 
            return state;        
    }
}

const CounterProvider = ({children}) => {
    // const [count, setCount]= useState(45);
    const [count, dispatch] = useReducer(reducer, initialState)
    return ( 
        <CounterContext.Provider value={count}>
            <CounterContextDispacher.Provider value={dispatch}>
                 {children}
            </CounterContextDispacher.Provider>
        </CounterContext.Provider>
     );
}
 
export default CounterProvider;


// custom Hook for context:

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => { 

    // const setCount = useContext(CounterContextDispacher);
    return useContext(CounterContextDispacher);


    // const addOne = () =>{
    //     setCount((prevCount) => prevCount + 1)
    // } 
    // const addFive = () => {
    //     setCount((prevCount) => prevCount + 5)
    // }
    // const decrement = () => {
    //     setCount((prevCount) => prevCount - 1)
    // }

    // return {addOne, addFive, decrement}
}