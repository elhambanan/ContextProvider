import withCounter from "../HOC/withCount";

const ClickCounter = ({count, incrementCount, name}) => {
    console.log(name)
   return (  
        <div>
            <button onClick={incrementCount}>Click on me:{count}</button>
        </div>
    );
}
 
export default withCounter(ClickCounter, 20);