

import './App.css'

import { useState } from "react";
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";

const defaultMarkdown = `# Welcome to Markdown Previewer!
## Subheading
- List item
- [Link](https://google.com)
\`\`\`js
console.log("Hello world!");
\`\`\`
> Blockquote
**Bold Text**
`;

export default function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header>
        <h1>Markdown Previewer</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </header>

      <main>
        <Editor value={markdown} onChange={setMarkdown} />
        <Previewer markdown={markdown} />
      </main>

      <footer>
        <button onClick={() => setMarkdown("")}>Reset</button>
      </footer>
    </div>
  );
}

