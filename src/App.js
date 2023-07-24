import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleAmount(amount, inputType) {
    if (inputType === "bill") {
      setBill(Number(amount));
    } else if (inputType === "myTip") {
      setMyTip(Number(amount));
    } else {
      setFriendTip(Number(amount));
    }
  }

  let totalTip = (myTip / 100 + friendTip / 100) * bill;

  return (
    <div className="App">
      <ReusableInput amount={bill} onInput={handleAmount} inputType="bill" />
      <ReusableInput amount={myTip} onInput={handleAmount} inputType="myTip" />
      <ReusableInput
        amount={friendTip}
        onInput={handleAmount}
        inputType="friendTip"
      />
      <h3>
        You pay ${totalTip + bill} (${bill} + ${totalTip} tip)
      </h3>
      <button>Reset</button>
    </div>
  );
}

function ReusableInput({ bill, onInput, inputType }) {
  return (
    <div>
      <p>
        How much was the bill? &nbsp;
        <input
          type="text"
          value={bill}
          onChange={(e) => onInput(e.target.value, inputType)}
        />
      </p>
    </div>
  );
}

export default App;
