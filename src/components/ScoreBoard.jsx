function ScoreBoard({ score, percent, input, words }) {
  const allChars = words.join("").toLowerCase();

  return (
    <>
      <div className="result">
        <p>
          Score: <span className="animate">{score}</span>
        </p>
        <p>
          Match %: <span>{percent}%</span>
        </p>
      </div>

      <div className="typed-preview">
        {[...input].map((char, index) => {
          const cleanChar = char.toLowerCase();
          const isMatch =
            cleanChar.trim() !== "" && allChars.includes(cleanChar);

          return (
            <span key={index} className={isMatch ? "match" : "nomatch"}>
              {char}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default ScoreBoard;
