import { useContext } from "react"
import Header from "../bootstrapHeader/header"
import { Datashare } from "../navigationStack/main"

const CartsScreen=()=>{
    const{cartItems,removeCartItems}=useContext(Datashare)
    console.log(cartItems);
    return(
        <>
        <Header/>
        <h1>Carts Screen</h1>
        {
            cartItems.length>0 
            ?
            <>
            {
                cartItems.map(eachCart=>{
                    const{image,name,caloriesPerServing,id}=eachCart
                    return(
                        <>
                        <h4>{name}</h4>
                        <h4>caloriesPerServing:{caloriesPerServing}</h4>
                        <img src={image} alt={name} height={150}/>
                        <button onClick={()=>removeCartItems(id)}>Remove</button>
                        </>
                    )
                })
            }
            </>
            :
            <h5>cart is empty</h5>
        }
        </>
    )
}
export default CartsScreen