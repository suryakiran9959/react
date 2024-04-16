// updating objects in a state
// Mutation ---> changing of the object itself 
import "./objects1.css"
import { useState } from "react"
function Form() {
    const[person,setPerson]=useState({
        name:"surya",
        password:"Surya@12",
        Email:"surya.mail.net@gmail.com"
    })

    function handleNameChange(e) {
        setPerson({
            ...person,name:e.target.value
        }) 
      }

    function handlePasswordChange(e){
        setPerson({
            ...person,password:e.target.value
        })
    }
    const handleEmailChange=(e)=>{
         setPerson({
            ...person,Email:e.target.value
         })
    }

   return(
    <>
    <form className="Forms">
    
    <label> USERNAME:
    <input type="text" value={person.name} onChange={handleNameChange}/>
    </label>

    <label> PASSWORD:
    <input type="text" value={person.password} onChange={handlePasswordChange}/>
    </label>

    <label> EMAIL:
    <input type="email" value={person.Email} onChange={handleEmailChange}/>
    </label>

    </form>
    <p className="p">
        {person.name}{' '}
        {person.password}{' '}
        ({person.Email})
      </p>
      
    </>
   ) 
}
export default Form
