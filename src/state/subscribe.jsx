import Counter from "./counter";

const { Component } = require("react");

class CustomButton extends Component{
    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
    }
    changeSubscribe=(()=>{
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe
            }
        )
    })
    render(){
        return(
            <>
            <button style={{
                color:this.state.isSubscribe? "red" : "green"
            }}  onClick={this.changeSubscribe}>{this.state.isSubscribe ? this.state.text2: this.state.text1}</button>
            {
                
                this.state.isSubscribe
                ?
                <>
                <h2>You are subscribed...</h2> 
                <Counter/>
                </>
                :
                <h2>Please Subscribe to view..</h2>
                
            }
        </>
        )
    }
}

export default CustomButton