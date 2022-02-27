import { useState } from "react";

const withCounter = (WrapperedComponent, incValue) => {
    const UpdatedComponet = (props) => {
        // logic: counter, handlers...
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount(count+ incValue)
        }
        return (<WrapperedComponent 
                 count={count} 
                 incrementCount={incrementCount}
                 {...props}
                 />)
    };
    return UpdatedComponet;
}
 
export default withCounter;