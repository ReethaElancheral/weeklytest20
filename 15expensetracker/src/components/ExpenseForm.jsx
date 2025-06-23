import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    const newExpense = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString(),
    };
    onAdd(newExpense);
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category</option>
        <option value="Food">🍔 Food</option>
        <option value="Transport">🚌 Transport</option>
        <option value="Shopping">🛍️ Shopping</option>
        <option value="Other">🔧 Other</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
