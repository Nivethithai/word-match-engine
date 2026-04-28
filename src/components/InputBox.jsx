function InputBox({ input, handleChange }) {
  return (
    <textarea
      placeholder="Type anything..."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    ></textarea>
  );
}

export default InputBox;