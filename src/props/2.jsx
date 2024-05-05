import { Component } from "react";

class CustomButton extends Component{
    render(){
        return(
            <>
            <button>{this.props.value}</button>
            </>
        )
    }
}
export default CustomButton