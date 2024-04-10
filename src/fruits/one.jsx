const { Component } = require("react");

class Fruit extends Component{
    state={
        fruits:["mango","banana"]
    }

    addFruit=()=>{
        const newFruit=[...this.state.fruits,"new fruit"]
        this.setState(
            {
                fruits:newFruit
            }
        )
    }
    deleteFruit=(index)=>{
       const newFruit=this.state.fruits.filter((eachFruit,i)=>i!==index)
        this.setState({
            fruits:newFruit
        })
    }
    updateFruit=(index)=>{
        const newFruit=this.state.fruits.map((eachFruit,i)=>{
            if(i==index){
                return "Pine Apple"
            }else{
                return eachFruit
            }
        })
        this.setState({
            fruits:newFruit
        })

    }

    render(){
        return(
            <>
            <h1>Fruits</h1>
            <button onClick={this.addFruit}>Add fruit</button>
            <ol>
            {
                this.state.fruits.map((eachOne,index)=>{
                    return(
                        <>
                        <li>{eachOne}</li>
                        <button onClick={()=>this.deleteFruit(index)}>Delete</button>
                        <button onClick={()=>this.updateFruit(index)}>Update</button>

                        </>
                    )
                })
            }
            </ol>
        
              </>
        )
    }
}
export default Fruit