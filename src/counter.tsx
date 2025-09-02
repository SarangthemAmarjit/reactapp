import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (newCount === 0) {
        alert("Count reached 0!");
      }
    }
  }

  function handleReset() {
    setCount(0);
    alert("Count reset to 0!");
  }

  return (
    <div className="Container">
      <h1>Counter</h1>
      <div className="display">{count}</div>
      <button className="increament" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="decreament" onClick={handleDecrement}>
        -
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
