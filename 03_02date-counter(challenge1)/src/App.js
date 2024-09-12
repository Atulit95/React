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

  function calcDate(days) {
    const myDate = new Date(); // or use an existing date objec

    const result = new Date(myDate);
    result.setDate(result.getDate() + days);
    return result.toDateString();
  }

  function handleStepInc() {
    setStep((s) => s + 1);
  }
  function handleStepDec() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleCountInc() {
    setCount((c) => c + step);
  }
  function handleCountDec() {
    setCount((c) => c - step);
  }

  return (
    <>
      <div className="step">
        <button className="decrease" onClick={handleStepDec}>
          -
        </button>
        <p>Step:{step}</p>
        <button className="decrease" onClick={handleStepInc}>
          +
        </button>
      </div>
      <div className="step">
        <button className="decrease" onClick={handleCountDec}>
          -
        </button>
        <p>Count:{count}</p>
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
    </>
  );
}

export default App;
