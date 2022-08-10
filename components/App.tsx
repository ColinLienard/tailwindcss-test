import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((state) => state + 1)}>
      {count}
    </button>
  )
}

export default App