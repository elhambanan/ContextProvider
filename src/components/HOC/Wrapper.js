// hoc
// Higher Ordered Component
// 1. hoc => function
// 2. input : Component ...=> output : NewComponent

// why ? to share logic of code between components

// const Wrapper = (props) => {
//     return <div className={props.class}>{props.children}</div>;
// }

const Wrapper = (WrappedComponent, ClassName) => {
    return (props)=>{
        console.log(props )
        return(
            <div className={ClassName}>
                <WrappedComponent {...props} />
            </div>
        )

    }
}
export default Wrapper;