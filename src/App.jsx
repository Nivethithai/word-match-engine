import { useState } from "react";
import Header from "./components/Header";
import WordList from "./components/WordList";
import InputBox from "./components/InputBox";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const words = [
    "React",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Node",
    "Git",
    "Debug",
    "Apple"
  ];

  // Join all words into one lowercase string
  const allChars = words.join("").toLowerCase();

  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleChange = (value) => {
    setInput(value);

    let matchCount = 0;
    let totalCount = 0;

    // Compare ALL typed characters against ALL characters in ALL words
    for (let char of value.toLowerCase()) {
      // Ignore spaces and punctuation
      if (/^[a-z0-9]$/i.test(char)) {
        totalCount++;

        for (let letter of allChars) {
          if (char === letter) {
            matchCount++;
          }
        }
      }
    }

    setScore(matchCount);

    const percentage =
      totalCount === 0
        ? 0
        : ((matchCount / totalCount) * 100).toFixed(1);

    setPercent(percentage);
  };

  return (
    <div className="container">
      <Header />
      <WordList words={words} />
      <InputBox input={input} handleChange={handleChange} />
      <ScoreBoard
        score={score}
        percent={percent}
        input={input}
        words={words}
      />
    </div>
  );
}

export default App;
