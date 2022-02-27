import { useCount, useCountAction } from "./CounterProvider";
// import { CounterContext, CounterContextDispacher } from "./CounterProvider";

const CounterOne = () => {
    // const count = useContext(CounterContext); //state
    // const setCount = useContext(CounterContextDispacher); //setState
    
    const count = useCount();
    // const {addOne, addFive, decrement} = useCountAction();
    const dispatch = useCountAction();

    // const addOne = (prevCount) => {setCount(prevCount+1) }
    // const addFive = (prevCount) => {setCount(prevCount+5)}
    return ( 
        <div>
            <h2>wellcome to useContext() + useReducer()</h2>
            <h3>count is: {count}</h3>
            <button onClick={() => dispatch({type : "add", value : 6})}>add</button>
            <button onClick={() => dispatch({type : "reset"})}>reset</button>
            <button onClick={() => dispatch({type : "decrement", value : 1})}>decrement</button>
        </div>
     );
}
 
export default CounterOne;