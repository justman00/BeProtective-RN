import React from 'react'

import { Marker, Callout } from 'react-native-maps'
import { Image, View, Text } from 'react-native'

import Popup from './Popup'
import { NavigationProp } from '../../screens/MapScreen'

interface Props {
  id: number
  coordinate: {
    latitude: number
    longitude: number
  }
  image: string
  address: string
  navigation: NavigationProp
}

function MarkerComponent(props: Props) {
  return (
    <Marker
      coordinate={{
        latitude: 46.88951971168032,
        longitude: 28.930748795347922,
      }}
      title='hello world'
      description='amazing'
      anchor={{ x: 0.5, y: 0.5 }}
      stopPropagation
      onCalloutPress={e => {
        e.stopPropagation()
      }}
    >
      <Image
        source={require('../../assets/marker.png')}
        style={{ width: 25, height: 25 }}
      />
      <Callout tooltip>
        <Popup navigation={props.navigation} image={props.image} />
      </Callout>
    </Marker>
  )
}

export default MarkerComponent
