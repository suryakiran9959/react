import axios from "axios"
import "./one.css"
const { Component } = require("react");


class ProductListing extends Component{
    state={
        products:[]
    }
    componentDidMount(){
        this.fetchData()
    }
fetchData=async()=>{
    let result=await axios.get("https://dummyjson.com/products") 
    console.log(result);
    this.setState({
        products:result.data.products
    })
}
filterLowToHigh=()=>{
    const result=this.state.products.sort((a,b)=>a.price-b.price)
    this.setState({
        products:result
    })
}
filterHighToLow=()=>{
    const result=this.state.products.sort((a,b)=>b.price-a.price)
    this.setState({
        products:result
    })
}


render(){
    return(
        <>
        <h1 style={{textAlign:"center",backgroundColor:"blueviolet"}}>Product listing</h1>
        <button onClick={this.filterLowToHigh}>Filter From Low to High</button>
        <button onClick={this.filterHighToLow}>Filter from high to low</button>
        {
            this.state.products.length>0
            ?
            <div className="main">
            {
                this.state.products.map((eachObject)=>{
                    return(
                        <div className="child">
                        <h3>{eachObject.title}</h3>
                        <h4>{eachObject.description}</h4>
                        <img src={eachObject.thumbnail}alt="img" width={200} height={200} />
                        <h3 style={{color:"red"}}>₹{eachObject.price}</h3>
                        <button>Add</button>
                        
                        </div>
                    )
                })
            }
            </div>
            :
            <h1>Loading.......</h1>

        }
        </>
    )
}

}
export default ProductListing
