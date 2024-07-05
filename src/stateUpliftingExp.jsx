import {useState} from "react"
function Child1({incrementHandler}){
    return <button onClick={incrementHandler}>Increase</button>
}
function Child2({count}){
    return <h1>Count:{count}</h1>
}
export default function App() {
    const[count,setCount]=useState(0)
    const incrementHandler=()=>{
        setCount(count+1)
   }
  return (
      <>
    <h1>state uplifting Exp</h1> 
    <Child1 incrementHandler={incrementHandler}/>
    <Child2 count={count}/>
      </>
  )
}

// def-- State uplifting in React refers to the technique of moving the state to the nearest common ancestor component when multiple child components need to share and synchronize state.
// lifting state  from child component by clicking button in child1
// parent will pass here the props to child
