import { useState } from "react";
import Two from "./two";

function One() {
  const [data, setData] = useState({
    name: "",
    age: "",
    role: ""
  });

  const handler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    
    const updatedData = [...existingData, data];
    
    localStorage.setItem("formData", JSON.stringify(updatedData));

    console.log("Updated Form Data:", updatedData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>NAME:</label>
        <input type="text" name="name" value={data.name} onChange={handler} />

        <label>AGE:</label>
        <input type="number" name="age" value={data.age} onChange={handler} />

        <label>ROLE:</label>
        <input type="text" name="role" value={data.role} onChange={handler} />

        <input type="submit" />
      </form>

      <Two />
    </>
  );
}

export default One;
