import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { increment, decrement, incrementByAmount } from "../../redux/slices/counterSlice";

const Counter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Type-safe  // update state
  const count = useSelector((state: RootState) => state.counter.value); // read state

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ marginRight: "10px", padding: "10px 20px" }}>
        ➕ Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ marginRight: "10px", padding: "10px 20px" }}>
        ➖ Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))} style={{ padding: "10px 20px" }}>
        🔢 Increment by 5
      </button>
    </div>
  );
};

export default Counter;
