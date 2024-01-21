import { useState } from "react"
import usePrevious from "./usePrevious"

export default function PreviousComponent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Anirban Mahata")
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>
        Current Count:{count} - previous Count:{previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("Dilip Kumar Mahata")}>Change Name</button>
    </div>
  )
}
