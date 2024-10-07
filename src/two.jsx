import { useEffect, useState } from "react";

function Two() {
  const [storedData, setStoredData] = useState([]); 

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setStoredData(JSON.parse(savedData));
    }
  }, []);  

  return (
    <>
      {storedData.length > 0 ? (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {storedData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.age}</td>
                <td>{entry.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}

export default Two;



