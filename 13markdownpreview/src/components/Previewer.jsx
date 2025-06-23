import { marked } from "marked";

export function Previewer({ markdown }) {
  return (
    <div className="previewer-container">
      <h2>Preview</h2>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}
