import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions/index";

export default function ReduxLearn() {
  
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello redux</h1>
      <p>{counter.number}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(login())}>Show data</button>
      {logged.logged && <h3>Valuable data</h3>}
    </div>
  );
}
