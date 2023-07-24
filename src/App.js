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
        You pay ${totalTip + bill} (${bill} + ${totalTip} tip)
      </h3>
      <button>Reset</button>
    </div>
  );
}

function ReusableInput({ bill, onInput, inputType, children }) {
  return (
    <div>
      <p>
        {children}
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
