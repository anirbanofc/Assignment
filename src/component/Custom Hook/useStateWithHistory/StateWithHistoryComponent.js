import { useState } from "react"
import useStateWithHistory from "./useStateWithHistory"

export default function StateWithHistoryComponent() {
  const [count, setCount, { history, pointer}] = useStateWithHistory(1)

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>Pointer - {pointer}</div>
      <button onClick={() => setCount(currentCount => currentCount * 2)}>
        Double
      </button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Increment
      </button>
     
    </div>
  )
}
