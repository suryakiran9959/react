
import { useEffect, useState } from "react";
import "./one.css"
import axios from "axios";

export function One() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("data", data);

  return (
    <>
    <center> <h1>Alumns of Law College</h1></center>
     
    <div className="main">

      {data.map((eachData,id) => (
        <div className="child" key={eachData.id}>
          <img src="../asets/1.jpeg" alt="Profile" />
          <p>{eachData.email}</p>
          <p>{eachData.company.catchPhrase}</p>
        </div>
      ))}

      </div>
    </>
  );
}
