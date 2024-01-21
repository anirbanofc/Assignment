import React from 'react'
import { useState } from 'react'
export default function useOnlineOffline() {

  let [Online, setOnline] = useState(true)
  window.addEventListener("load", (event) => {
    if (navigator.onLine) {
      setOnline((prvvalue) => prvvalue)
      console.log("Online");
    }
    else {
      setOnline(false)
      console.log("OFFline");

    }

  })
  return (
    <div>
      <h1>{Online ? "Online" : "Offline"}</h1>
    </div>
  )
}
