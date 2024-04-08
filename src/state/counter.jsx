import { Component } from "react";

class Counter extends Component{
    state={
        count:0
    }
    incrementOne=(event)=>{
        this.setState(
            {
               count:this.state.count+event 
            }
        )
    }
    decrementOne=()=>{
        this.setState(
            {
               count:this.state.count-1 
            }
        )
    }
    reset=()=>{
        this.setState(
            {
               count:0
            }
        )
    }

    render(){
        return(
            <>          
            <h1>Counter Example....</h1>
            <h3>count:{this.state.count}</h3>
            <button onClick={()=>this.incrementOne(1)}>Increment one</button> 
            <button onClick={()=>this.incrementOne(10)}>Increment by 10</button> 
            <button onClick={this.decrementOne} >Decrement one</button>
            <button onClick={this.reset} >Reset</button>
            </>
        )
    }
}
export default Counter