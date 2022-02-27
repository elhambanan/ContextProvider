import { useReducer} from "react";

const initialState = {
    firstCounter : 0, 
    secondeCounter : 0
};

const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case "addOne":
            return {...state, firstCounter : state.firstCounter+ action.value};
        case "decrement":
            return {...state, firstCounter : state.firstCounter- action.value};

        case "addOne2":
            return {...state, secondeCounter : state.secondeCounter+ action.value};
        case "decrement2":
            return {...state, secondeCounter : state.secondeCounter- action.value};    


        case "reset" :   
            return initialState;    
        default: 
            return state;        
    }
}

const CounterOne = () => {

    //  useState & useReducer =>for state managment
    //  useReducer steps :

    // 1. import useReducer();
    // 2. useReducer(reducer, initialState);
    // 3. return : [count , dispatch] .... dispatch is function
    // 4. reducer(state, action)


    const [count, dispatch] = useReducer(reducer, initialState)
    // state = {}
    // action = {}

    // multiple state ? 
    return ( 
        <div>
            <h2>wellcome to Reducer:</h2>

            <div>
                <h3>count one is : {count.firstCounter}</h3>
                <button onClick={() => dispatch({type : "addOne", value :6})}>add</button>
                <button onClick={() => dispatch({type : "decrement", value :1})}>minuse</button>
                <button onClick={() => dispatch({type : "reset"})}>Reset</button>
            </div>
            <div>
                <h3>count two is : {count.secondeCounter}</h3>
                <button onClick={() => dispatch({type : "addOne2", value :1})}>add2</button>
                <button onClick={() => dispatch({type : "decrement2", value :5})}>minuse2</button>
                <button onClick={() => dispatch({type : "reset"})}>Reset</button>
            </div>
        </div>
     );
}
 
export default CounterOne;