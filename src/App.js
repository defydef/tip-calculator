import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleAmount(amount, inputType) {
    if (inputType === "bill") {
      setBill(parseFloat(amount, 10));
    } else if (inputType === "myTip") {
      setMyTip(parseFloat(amount, 10));
    } else {
      setFriendTip(parseFloat(amount, 10));
    }
  }

  function handleReset() {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  }

  let totalTip = (myTip / 100 + friendTip / 100) * bill;

  return (
    <div className="App">
      <ReusableInput amount={bill} onInput={handleAmount} inputType="bill">
        How much was the bill? &nbsp;
      </ReusableInput>
      <ReusableInput amount={myTip} onInput={handleAmount} inputType="myTip">
        How did you like the service? &nbsp;
      </ReusableInput>
      <ReusableInput
        amount={friendTip}
        onInput={handleAmount}
        inputType="friendTip"
      >
        How did your friend like the service? &nbsp;
      </ReusableInput>
      <h3>
        You pay ${(totalTip + bill).toFixed(2)} (${bill.toFixed(2)} + $
        {totalTip.toFixed(2)} tip)
      </h3>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function ReusableInput({ amount, onInput, inputType, children }) {
  return (
    <div>
      <p>
        {children}

        {inputType === "bill" ? (
          <input
            type="text"
            placeholder="Bill value"
            value={amount}
            onChange={(e) => onInput(e.target.value, inputType)}
          />
        ) : (
          <select
            value={amount}
            onChange={(e) => onInput(e.target.value, inputType)}
          >
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
          </select>
        )}
      </p>
    </div>
  );
}

export default App;
