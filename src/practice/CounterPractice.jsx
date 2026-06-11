import { useState } from 'react'

function CounterPractice() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Increment
      </button>
    </div>
  )
}

export default CounterPractice
