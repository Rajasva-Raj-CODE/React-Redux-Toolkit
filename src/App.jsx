import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset,incrementByAmount } from "./features/counter/counterSlice";
import { useState } from "react";
const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementhandle() {
    dispatch(increment());
  }
  function decrementhandle() {
    dispatch(decrement());
  }

  function Resethandle() {
    dispatch(reset());
  }
  function handleByAmountclick() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div>
      <button onClick={incrementhandle}>+</button>
      <p>count: {count}</p>
      <button onClick={decrementhandle}>-</button>
      <br />
      <button onClick={Resethandle}>RESET</button>
      <br />
      <input
        type="number"
        placeholder="enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleByAmountclick}>Inceremnt By Amount</button>
    </div>
  );
};

export default App;
