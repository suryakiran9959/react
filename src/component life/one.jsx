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

render(){
    return(
        <>
        <h1 style={{textAlign:"center",backgroundColor:"blueviolet"}}>Product listing</h1>
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
