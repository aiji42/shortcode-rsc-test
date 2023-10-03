"use client";

import { Suspense, useReducer } from "react";
import { Pokemon } from "@/components/Pokemon";

export const Counter = () => {
  const [count, increment] = useReducer((s) => s + 1, 0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};
