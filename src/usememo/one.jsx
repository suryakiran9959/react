import { useMemo, useState } from "react";

function One() {
  const[count,setCount]=useState(0)
  const [countfact,setcountfact]=useState(0)
  const [name,setname] = useState('')
  const [searchname,setsearchname] =useState('')
  
  const memValue = useMemo(()=>{
    return factorial(countfact)
  },[countfact]) 

  const MemuserName= useMemo(()=>{
     return FindtheExitUser(searchname)
  },[searchname])

  return (
    <>
    <h4>factorial:{memValue}</h4>
    <h1>Count:{count}</h1>
    <input type='text' onChange={(e)=>setname(e.target.value)} />
    <button onClick={()=>setsearchname(name)}>Search the user name in the db</button>
    <button onClick={()=>setCount(count+1)}>Increment</button> <br /> <br />
    <button onClick={()=>setcountfact(count)}>factorial</button> <br /> <br />
    </>
  );
}

function factorial(n){

    let ans=1
    for(var i=n;i>=1;i--){
        ans=ans*i       
    }
    console.log("rendering function..");
    return ans;   
  }

  function FindtheExitUser(name){
    console.log(name)
  }

export default One;