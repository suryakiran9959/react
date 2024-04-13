import { useRef, useState } from "react"

const UnControlledInput=()=>{
    const userNameRef=useRef("")
    const passwordRef=useRef("")
    const[errorVisible,setErrorVisible]=useState(false)

const handleSubmit=(event)=>{
    event.preventDefault()

    const userInput=userNameRef.current.value 
    const passwordInput=passwordRef.current.value

    if(userInput.length<5){
        alert("user name must be more than 5 characters")
        setErrorVisible(true)
    }
    else{
        console.log("submitted form");
        setErrorVisible(false)
    }

}

    return(
        <>
        {/* onSubmit (R&D)   and span */}
        <form onSubmit={handleSubmit}> 
  <div className="mb-3 mt-3">
    <label htmlFor="email">Email:</label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={userNameRef}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd">Password:</label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  {errorVisible && <h3 style={{color:"red"}}>user name must be greater than 5 characters</h3>}
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

        </>
    )
}
export default UnControlledInput