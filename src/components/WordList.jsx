function WordList({ words }) {
  return (
    <>
      <h3>Available Words</h3>
      <div className="word-list">
        {words.map((word, index) => (
          <span className="word" key={index}>
            {word}
          </span>
        ))}
      </div>
    </>
  );
}

export default WordList;
