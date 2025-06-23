export function ThemeToggle({ dark, setDark }) {
  return (
    <button className="theme-toggle" onClick={() => setDark(!dark)}>
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
