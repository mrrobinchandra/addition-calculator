import { useState } from "react";
import type { ChangeEvent } from "react";
import "./App.css";
import { adding } from "./utils/util";
function App() {
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [sum, setSum] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setError("");
  };

  // const adding = (numbers: string): number => {
  //   if (!numbers.trim()) return 0;

  //   numbers = numbers.replace(/\\n/g, "\n");

  //   let delimiter = /,|\n/;
  //   if (numbers.startsWith("//")) {
  //     const parts = numbers.split("\n");

  //     const customDelimiter = parts[0].slice(2);

  //     delimiter = new RegExp(customDelimiter);

  //     numbers = parts.slice(1).join("\n");
  //   }

  //   const numArray = numbers
  //     .split(delimiter)
  //     .map((n) => n.trim())
  //     .filter((n) => n !== "")
  //     .map(Number);

  //   const negatives = numArray.filter((n) => n < 0);
  //   if (negatives.length > 0) {
  //     throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  //   }

  //   const validNumbers = numArray.filter((n) => !isNaN(n));

  //   const total = validNumbers.reduce((acc, n) => acc + n, 0);
  //   return total;
  // };

  const handleSubmit = () => {
    try {
      const total = adding(text?.toString());

      setSum(total);
      setError("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setSum(0);
      }
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>🧮 String Calculator</h3>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder={`Examples:
1,2,3
1\\n2,3
//;\\n1;2`}
        rows={5}
        cols={40}
        style={{ padding: "10px" }}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>

      <h4>Sum: {sum}</h4>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
