import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./one.css";
import Header from "./header";

function Fetch() {
    const [data, setData] = useState([]);
    const [orderDetails, setOrderDetails] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);
    const [orders, setOrders] = useState([]); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968");
            setData(result.data.record);
        };
        fetchData();

        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleOrder = (item) => {
        setSelectedItem(item);
        window.scrollTo(0, 0); 
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        
        const detailsWithItem = {
            ...orderDetails,
            itemName: selectedItem.name,
        };

        alert(`Order placed for ${selectedItem.name} at Table: ${orderDetails.tableNumber}`);

        // Decrease the available quantity of the selected item
        const updatedData = data.map((item) => {
            if (item.id === selectedItem.id) {
                return { ...item, available_quantity: item.available_quantity - 1 };
            }
            return item;
        });

        setData(updatedData); // Update the state with new data

        const updatedOrders = [...orders, detailsWithItem];
        setOrders(updatedOrders);

        localStorage.setItem('orders', JSON.stringify(updatedOrders));

        navigate("/history"); 
    };

    return (
        <>
            <Header />
            <center><h1>WELCOME YOU CAN ORDER YOUR FAV DISHES!</h1></center>
            <hr />
            <center>
                {selectedItem && (
                    <div className="order-form">
                        <h3>Order Details for: {selectedItem.name}</h3>
                        <form onSubmit={handleSubmitOrder}>
                            <div>
                                <label>Table Number:</label>
                                <input
                                    type="text"
                                    name="tableNumber"
                                    value={orderDetails.tableNumber || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Contact Number (Optional):</label>
                                <input
                                    type="text"
                                    name="contactNumber"
                                    value={orderDetails.contactNumber || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Date:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={orderDetails.date || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Time:</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={orderDetails.time || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit">Confirm Order</button>
                        </form>
                    </div>
                )}
            </center>
            <hr />

            <div className="main">
                {data.map((each) => (
                    <div key={each.id} className="child">
                        <div className="image">
                            <img src={each.image_url} alt={each.name} height={200} width={200} />
                        </div>
                        <p>Name: {each.name}</p>
                        <p>Category: {each.category}</p>
                        <p>Price: ${each.price}</p>
                        <p>Available Quantity: {each.available_quantity}</p>
                        <button
                            onClick={() => handleOrder(each)}
                            disabled={each.available_quantity === 0}
                            className={each.available_quantity === 0 ? "disabled-button" : "active-button"}
                        >
                            {each.available_quantity === 0 ? "Out of Stock" : "Place an Order"}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Fetch;
