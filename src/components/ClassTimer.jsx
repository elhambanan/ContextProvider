import React, { Component } from 'react';
class ClassTimer extends Component {
    state = { 
        count:0
     } 
    componentDidMount() {
        this.myTimer = setInterval(()=>{
            console.log("hi world")
            this.setState({count: this.state.count + 1})
        },2000)
    } 
    componentWillUnmount() {
        console.log("CWUM");
        clearInterval(this.myTimer);
    }
    render() { 
        return (
            <div>
                class Interval 
            </div>
        );
    }
}
 
export default ClassTimer;