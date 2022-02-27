import React, { PureComponent } from 'react';

class PureComp extends PureComponent{
    state = {  } 
    render() { 
        console.log("pure comp")
        return (
            <div>
                pure comp - {this.props.name}
            </div>
        );
    }
}
 
export default PureComp;