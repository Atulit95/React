import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  console.log(step);

  function calcDate(days) {
    const myDate = new Date(); // or use an existing date objec

    const result = new Date(myDate);
    result.setDate(result.getDate() + days);
    return result.toDateString();
  }

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  function handleCountInc() {
    setCount((c) => c + step);
  }
  function handleCountDec() {
    setCount((c) => c - step);
  }

  // function handlesliderInp(e) {
  //   e.preventDefault();
  // }

  return (
    <>
      {/* <div className="step">
        <button className="decrease" onClick={handleStepDec}>
          -
        </button>
        <p>Step:{step}</p>
        <button className="decrease" onClick={handleStepInc}>
          +
        </button>
      </div> */}
      <div className="slider">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        Step: {step}
      </div>
      <div className="step">
        <button className="decrease" onClick={handleCountDec}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        ></input>
        <button className="decrease" onClick={handleCountInc}>
          +
        </button>
      </div>
      {count > 0 ? (
        <p className="step">
          {Math.abs(count)} days from today is {calcDate(count)}
        </p>
      ) : count === 0 ? (
        <p className="step">Today is {calcDate(count)}</p>
      ) : (
        <p className="step">
          {Math.abs(count)} days ago was {calcDate(count)}
            </p>
      )}
      {step !==0 ? <button onClick={handleReset} className="reset">Reset</button> : ""}
    </>
  );
}

export default App;
