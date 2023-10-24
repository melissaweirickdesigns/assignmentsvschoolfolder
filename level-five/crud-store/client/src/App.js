import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('/api/items'); // Assuming your Express API is running on the same host/port
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items', error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Store</h1>
      <div id="items-list">
        {items.map((item) => (
          <div key={item._id} className="item">
            <h2>{item.manufacturer} {item.brand}</h2>
            <p>Product Name: {item.productName}</p>
            <p>Price: ${item.price}</p>
            <p>Unit of Measure: {item.unitOfMeasure}</p>
            <p>Weight: {item.weight} lbs</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
