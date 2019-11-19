const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const formSubmit = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult(`정답 : ${value}`);
      setValue("");
    } else {
      setValue("");
      setResult("땡!");
    }
    inputRef.current.focus();
  };
  const inputChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <div>
        {first} 곱하기 {second} 는 ?
      </div>
      <form onSubmit={formSubmit}>
        <input ref={inputRef} value={value} onChange={inputChange} type="number" />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};
module.exports = GuGuDan;
