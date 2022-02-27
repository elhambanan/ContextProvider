import withCounter from "../HOC/withCount";

const HoverCounter = ({count, incrementCount}) => {
    return ( 
        <div>
            <button onMouseOver={incrementCount}>
                Hover on me:{count}
            </button>
        </div>
     );
}
 
export default withCounter(HoverCounter, 5);