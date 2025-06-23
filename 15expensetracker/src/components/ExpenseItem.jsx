export function ExpenseItem({ expense, onDelete }) {
  const date = new Date(expense.date).toLocaleDateString();

  return (
    <div className="expense-item">
      <div>
        <h3>{expense.title}</h3>
        <small>
          {expense.category} • {date}
        </small>
      </div>
      <div className="expense-amount">
        <span>₹{expense.amount.toFixed(2)}</span>
        <button onClick={() => onDelete(expense.id)}>Delete</button>
      </div>
    </div>
  );
}
