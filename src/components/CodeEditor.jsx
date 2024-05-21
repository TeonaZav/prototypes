import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript.js";

import { demoCode1 } from "../data/demoCodes";

const CodeEditor = ({ codeExample }) => {
  const defaultCode = `function greet() {
  return "Hello, World!";
}
greet();`;

  const [code, setCode] = useState(codeExample);
  const [output, setOutput] = useState("");

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
  };

  const executeCode = () => {
    try {
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div className="code-output">
      <CodeMirror
        value={code}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
        }}
        onBeforeChange={handleCodeChange}
      />
      <button className="btn btn-primary btn-run" onClick={executeCode}>
        Run Code
      </button>
      <pre className="result">Output: {output}</pre>
    </div>
  );
};

export default CodeEditor;
