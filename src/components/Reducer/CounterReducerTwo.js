import { useReducer} from "react";

const initialState = 0

const reducer = (state, action) => {
    console.log(state, action)
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

const CounterReducerTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return ( 
        <div>
            <h2>wellcome to multiple Reducer:</h2>
            <div>
                <h3>count one is : {count}</h3>
                <button onClick={() => dispatch({type : "add", value :6})}>add</button>
                <button onClick={() => dispatch({type : "decrement", value :1})}>minuse</button>
                <button onClick={() => dispatch({type : "reset"})}>Reset</button>

            </div>
            <div>
                <h3>count two is : {countTwo}</h3>
                <button onClick={() => dispatchTwo({type : "add", value :1})}>add2</button>
                <button onClick={() => dispatchTwo({type : "decrement", value :5})}>minuse2</button>
                <button onClick={() => dispatchTwo({type : "reset"})}>Reset</button>
            </div>
        </div>
     );
}
 
export default CounterReducerTwo;