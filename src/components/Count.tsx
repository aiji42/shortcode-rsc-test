"use client";
import { useReducer } from "react";

export const Count = () => {
  const [count, increment] = useReducer((s) => s + 1, 0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};
