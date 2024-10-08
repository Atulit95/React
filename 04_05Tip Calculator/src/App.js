import { useState } from "react";
import './index.css';

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2)/2)/100

  function handleReset(){
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onsetBill={setBill}>
        How much was the bill?
      </BillInput>
      <SelectPercentage
        percentage={percentage1}
        onsetPercentage={setPercentage1}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onsetPercentage={setPercentage2}
      >
        How did your like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ children, bill, onsetBill }) {
  return (
    <div className="container">
      <p>{children}</p>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onsetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onsetPercentage }) {
  return (
    <div className="container">
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => onsetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({bill,tip}){
  return(
    <h3>You pay ${tip + bill} (${bill} + ${tip} tip) </h3>
  )
}

function Reset({onReset}){
  return <button onClick={onReset}>Reset</button>
}