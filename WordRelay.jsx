const React = require("react");
const { Component, useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("전혜성");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const onRef = useRef(null);

  const formSubmit = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답!");
      setValue("");
      setWord(value);
    } else {
      setResult("땡!");
      setValue("");
    }
    onRef.current.focus();
  };
  const inputChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <div>{word}</div>
      <form onSubmit={formSubmit}>
        <input ref={onRef} value={value} onChange={inputChange} type="text" />
        <button>입력!!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
