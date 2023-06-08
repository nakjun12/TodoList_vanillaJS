import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./lib/redux/counterSlice";
import { AppDispatch, RootState } from "./lib/redux/store";

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
