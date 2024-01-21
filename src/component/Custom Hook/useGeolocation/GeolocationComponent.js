import useGeolocation from "./useGeolocation"

export default function GeolocationComponent() {
  const {
    data: { latitude, longitude },
  } = useGeolocation()

  return (
    <>
      <div>
      latitude:{latitude}   longitude:{longitude}
      </div>
    </>
  )
}
