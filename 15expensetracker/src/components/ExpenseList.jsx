import { ExpenseItem } from "./ExpenseItem";

export function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="empty-msg">No expenses yet.</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </div>
  );
}
