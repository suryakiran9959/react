import { Component, PureComponent } from "react";

class Child extends PureComponent{
    render(){
        console.log("child one")
        return(
            <>
            <h1>Child</h1>
            </>
        )
    }
}
export default Child
