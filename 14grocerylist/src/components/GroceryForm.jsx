import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function GroceryForm({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("pcs");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !unit) return;
    const item = {
      id: uuidv4(),
      name,
      quantity,
      unit,
      category,
      bought: false,
    };
    onAdd(item);
    setName("");
    setQuantity(1);
    setUnit("pcs");
    setCategory("");
  };

  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <input
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="pcs">pcs</option>
        <option value="kg">kg</option>
        <option value="litre">litre</option>
        <option value="pack">pack</option>
        <option value="bottle">bottle</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Category</option>
        <option value="Fruits">🍎 Fruits</option>
        <option value="Vegetables">🥦 Vegetables</option>
        <option value="Dairy">🧀 Dairy</option>
        <option value="Beverages">🥤 Beverages</option>
        <option value="Other">🧺 Other</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
