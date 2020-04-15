import React, {PureComponent} from 'react';
class Pure extends PureComponent{
    render(){
        console.log("pure")
        return(<div>
            purecomponent {this.props.name}
        </div>)
    }
}
export default Pure