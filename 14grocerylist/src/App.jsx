

import './App.css'


import { useEffect, useState } from "react";
import { GroceryForm } from "./components/GroceryForm";
import { GroceryList } from "./components/GroceryList";


export default function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("groceryItems")) || [];
  });

  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([item, ...items]);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map((i) => (i.id === id ? updatedItem : i)));
  };

  const removeItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <header>
        <h1>🛒 Grocery List</h1>
  
      </header>
      <GroceryForm onAdd={addItem} />
      <GroceryList items={items} onUpdate={updateItem} onRemove={removeItem} />
    </div>
  );
}

