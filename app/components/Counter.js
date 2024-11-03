"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={increaseCount}>Count: {count}</button>;
    </div>
  );
}
