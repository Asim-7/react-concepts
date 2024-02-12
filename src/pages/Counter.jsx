import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1); // use prev to add value to last value rather than adding new
  };

  return (
    <>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleCount}
      >
        Click me
      </button>

      <p>Click is: {count}</p>
    </>
  );
}

export default Counter;
