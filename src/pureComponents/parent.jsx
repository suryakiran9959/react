import Child from "./children";


const { Component} = require("react");

class Parent extends Component{
    state={
        count:0
    }
    incrementCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
       
        return(
            <>
            <h2>{this.state.count}</h2>
            <button onClick={this.incrementCount}>Increment</button>
            <Child/>
            </>
        )
    }

}
export default Parent