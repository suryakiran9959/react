import { useEffect, useState } from "react";
import "./one.css";
import axios from "axios";

export function One() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <center>
        <h1>Essane Tech</h1>
      </center>

      <div className="main">
        {data.map((eachData, id) => (
          <div className="child">
            <div className="img">
              <img src={`/asets/${id}.jpeg`} alt="q" />
            </div>
            <h5>{eachData.name}</h5>
            <h6>{eachData.email}</h6>
            <h6>{eachData.company.catchPhrase}</h6>
          </div>
        ))}
      </div>
    </>
  );
}
