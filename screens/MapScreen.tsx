import React from 'react'
import Map from '../components/map'
import { NavigationScreenProp } from 'react-navigation'

interface Props {
  navigation: NavigationScreenProp<{}>
}

export type NavigationProp = {} & NavigationScreenProp<{}>

function MapScreen(props: Props) {
  return <Map {...props} />
}

export default MapScreen
