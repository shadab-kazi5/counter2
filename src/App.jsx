import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log(`Counter updated: ${count}`);

    return () => {
      console.log(`Cleanup for count: ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleAdd}>Increase</button>
      <button onClick={handleMinus}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
