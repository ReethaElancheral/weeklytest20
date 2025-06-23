

import './App.css'


import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { Dashboard } from "./components/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    const { username, password } = credentials;
   
    if (username === "admin" && password === "1234") {
      setUser({ username });
    } else {
      alert("Invalid credentials. Try admin / 1234");
    }
  };

  const handleLogout = () => setUser(null);

  return (
    <div className="app auth-app">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}




