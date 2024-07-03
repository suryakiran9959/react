import { Component } from "react";

class Example extends Component{
   // constructor(){    // - to initialize the state in comp and bind events and methods,auto invoking method
      //  super() 
        state={
            name:"a"
        }    
   // }
     changeName=()=> {
        this.setState({
            name:"b"
        }) 
    }
    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeName}>change</button>
            </>
        )
    }
}

export default Example
