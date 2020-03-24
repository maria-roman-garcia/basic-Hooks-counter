import React, { useState } from "react";
import './App.css';

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <label for="NumberChoosenValue">I want to start at number:</label>
      <input type="number" onChange={(event) => setCount(Number(event.target.value))}></input>

      <p>The counter is at : <span className="result">{count}</span> </p>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setCount(count - 1)}> -1</button>
    </div>
  );
}

export default Counter;