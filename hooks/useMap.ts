import React from 'react'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { Region } from '../components/map'

export default function useMap(
  region: Region,
  setRegion: React.Dispatch<React.SetStateAction<Region>>,
  setAddress?: React.Dispatch<React.SetStateAction<Location.Address>>,
) {
  const map = React.useRef()

  React.useEffect(() => {
    async function helper() {
      const { status } = await Permissions.askAsync(Permissions.LOCATION)

      if (status !== 'granted') {
        // handle errors here
        return
      }

      // handle no permission (granted)

      const { latitude, longitude } = await findMe()

      if (setAddress) {
        await getAddress(latitude, longitude)
      }
    }
    helper()
  }, [])

  // to think more aboyt how to implement the get address funcitonality, might do an api call as well
  async function getAddress(latitude, longitude) {
    const address = await Location.reverseGeocodeAsync({ longitude, latitude })
    console.log(address)
    if (address.length) {
      setAddress(address[0])
    }
  }

  async function findMe() {
    const {
      coords: { longitude, latitude },
    } = await Location.getCurrentPositionAsync({})

    const myRegion = { ...region, longitude, latitude }

    // @ts-ignore
    map.current.animateToRegion(myRegion, 1000)

    setRegion(myRegion)

    return myRegion
  }

  return { findMe, map, region }
}
