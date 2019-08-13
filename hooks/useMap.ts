import React from 'react'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { Region } from '../components/map'

export default function useMap(
  region: Region,
  setRegion: React.Dispatch<React.SetStateAction<Region>>,
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

      await findMe()
    }
    helper()
  }, [])

  async function findMe() {
    const {
      coords: { longitude, latitude },
    } = await Location.getCurrentPositionAsync({})

    const myRegion = { ...region, longitude, latitude }

    // @ts-ignore
    map.current.animateToRegion(myRegion, 1000)

    setRegion(myRegion)
  }

  return { findMe, map, region }
}
