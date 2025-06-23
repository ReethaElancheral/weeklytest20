export function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <h2>Welcome, {user.username}!</h2>
      <p>This is a protected dashboard.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
