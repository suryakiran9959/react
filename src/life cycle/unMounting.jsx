const { Component } = require("react");

class UnMounting extends Component{
    state={
        isVisible:true
    }

changeMount=()=>{
    this.setState({
        isVisible:!this.state.isVisible
    })
}
    render(){
        return(
            <>
            <h1>UN MOUNTING</h1>
            <button onClick={this.changeMount}>Click to remove</button>
            {
                this.state.isVisible ? <Child/> : <h2>removed</h2>
            }
            </>
        )
    }
}
export default UnMounting

class Child extends Component{
    componentWillUnmount(){
        alert("should remove")
    }
    render(){
        return(
            <>
            <h2>Child presents</h2>
            </>
        )
    }
}