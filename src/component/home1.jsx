import { useDispatch, useSelector } from "react-redux";
import { todoActionAdd } from "../redux/action/action";
import { useState } from "react";
import { profileUpdateAction } from "../redux/action/profileAction";

export function Home1() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const profileData=useSelector(state=>state.profile)
 console.log(profileData);

  const inputFunction = (e) => {
    setTodoValue(e.target.value);
  };

  const addTodo = () => {
    if (todoValue.length >= 1) {
      alert("todo added..!");
      dispatch(todoActionAdd(todoValue));
      setTodoValue("");
    }
  };

const profileUpdate=()=>{
  dispatch(profileUpdateAction("sai ram"))
}

  return (
    <>
      <input type="text" value={todoValue} onChange={inputFunction} />
      <button onClick={addTodo}>ADD TODO</button>
      <h1>Profile Information</h1> 
      <p>{profileData.profileName}</p>
      <p>{profileData.city}</p>
      <button onClick={profileUpdate}>Upadte profile name</button>

    </>
  );
}
