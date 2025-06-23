

import './App.css'
import { useEffect, useState } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { BalanceSummary } from "./components/BalanceSummary";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="tracker-container">
      <h1>💸 Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <BalanceSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

