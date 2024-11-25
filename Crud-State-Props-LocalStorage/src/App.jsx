import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [alertMessage, setAlertMessage] = useState(''); // State to store alert message

  // Load items from localStorage on initial render
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Function to display alert message and auto-hide after 3 seconds
  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000); // Clear alert after 3 seconds
  };

  const addItem = (item) => {
    setItems([...items, item]);
    showAlert('Item added!');  // Show alert on add
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    showAlert('Item deleted!');  // Show alert on delete
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    showAlert('Item updated!');  // Show alert on update
  };

  return (
    <div>
      <h1>CRUD App with State-based Alerts</h1>
      {alertMessage && <div className="alert">{alertMessage}</div>} {/* Display alert */}
      <AddItem addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} updateItem={updateItem} />
    </div>
  );
};

export default App;
