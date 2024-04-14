import { useState } from "react"

const ControlledComponents2 = () => {

  const [formErrors,setFormErrors]=useState(
    {
        usernameErr:null,
        passwordErr:null
    }
  )
    const[form,setForm]=useState(
        {
            username:null,
            password:null

        }
    )

    const onChangeHandler=(event)=>{

        const {value,name}=event.target
        console.log(value,name)

        setForm(prevState=>({
            ...prevState,[name]:value
        }))
       
        switch(name){ 
            case "username":
                if(value.length>6){
                    setFormErrors(
                        {...formErrors,usernameErr:"enter less than 6"}

                    )
                }
                break
                case "password":
                    if(value.length>6){
                        setFormErrors(
                            {...formErrors,passwordErr:"enter less than 6"}
    
                        )
                    }
                    break
                default : 
                break     
        }
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}  >
            <label>UserName</label>
            <input
                type="text"
                value={form.username}
                onChange={onChangeHandler}
                name="username"
            />
        
        {
           formErrors.usernameErr  && <span style={{color:"red"}} >Invalid user name</span>
        }

            <label>Password</label>
            <input
                type="password"
                value={form.password}
                onChange={onChangeHandler}
                name="password"
            />
            {
           formErrors.passwordErr  && <span style={{color:"red"}} >Invalid Password </span>
        }
            <button type="submit" >Submit</button>

        </form>
    )

}
export default ControlledComponents2













