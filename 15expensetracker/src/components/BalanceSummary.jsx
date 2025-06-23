export function BalanceSummary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <div className="summary-box">
      <h2>Total Spent</h2>
      <p>₹{total.toFixed(2)}</p>
    </div>
  );
}
