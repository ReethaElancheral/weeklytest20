export function Editor({ value, onChange }) {
  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write markdown here..."
      />
    </div>
  );
}
