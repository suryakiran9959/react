import { useState } from "react";

function One() {
    const [data, setData] = useState(["mango", "apple"]);
    const [inputValue, setInputValue] = useState("");

    // Handler to update the input field
    const handler = (e) => {
        setInputValue(e.target.value);
    };

    // Handler to add a new item to the list
    const addHandler = () => {
        if (inputValue.trim() !== "") {
            setData([...data, inputValue]);
            setInputValue(""); // Clear input after adding
        }
    };

    // Handler to delete an item using the filter method
    const deleteHandler = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    return (
        <>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handler}
            />
            <button onClick={addHandler}>Add</button>

            {data.map((eachOne, index) => (
                <div key={index}>
                    <h1>{eachOne}</h1>
                    {/* Use an anonymous function to pass the index to deleteHandler */}
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default One;
