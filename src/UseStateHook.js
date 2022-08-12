import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        setCount(count + 1)
    }
    const decrementCount = () =>{
        setCount(count - 1)
    }

  return (
    <div>
        <button onClick={incrementCount}>Increase </button>
            {count}
        <button onClick={decrementCount}>Decrease </button>
    </div>
  )
}

export default UseStateHook