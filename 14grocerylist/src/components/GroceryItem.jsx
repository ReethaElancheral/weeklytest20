import { useState } from "react";

export function GroceryItem({ item, onUpdate, onRemove }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [unit, setUnit] = useState(item.unit);

  const handleSave = () => {
    onUpdate(item.id, { ...item, name, unit });
    setEditing(false);
  };

  return (
    <div className={`grocery-item ${item.bought ? "bought" : ""}`}>
      <div>
        {editing ? (
          <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="pcs">pcs</option>
              <option value="kg">kg</option>
              <option value="litre">litre</option>
              <option value="pack">pack</option>
              <option value="bottle">bottle</option>
            </select>
          </>
        ) : (
          <span>
            {item.name} <small>({item.quantity} {item.unit})</small>
          </span>
        )}
      </div>
      <div className="item-actions">
        {editing ? (
          <button onClick={handleSave}>💾</button>
        ) : (
          <button onClick={() => setEditing(true)}>✏️</button>
        )}
        <button onClick={() => onRemove(item.id)}>❌</button>
      </div>
    </div>
  );
}
