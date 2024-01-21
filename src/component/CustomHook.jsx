import ToggleComponent from "./Custom Hook/useToggle/ToggleComponent"
import GeolocationComponent from "./Custom Hook/useGeolocation/GeolocationComponent"
import PreviousComponent from "./Custom Hook/usePrevious/PreviousComponent"
import StateWithHistoryComponent from "./Custom Hook/useStateWithHistory/StateWithHistoryComponent"
import UseTitle from "./useTitle"
import { useState } from "react"


export default function CustomHook() {
    let [Count, setCount] = useState(0)
    UseTitle(Count)

    return (
        <>
        <button onClick={()=> setCount(Count+1)}>Click to update count in Title bar</button>
            <ToggleComponent />
            <GeolocationComponent />
            <PreviousComponent />
            <StateWithHistoryComponent />

        </>
    )
}