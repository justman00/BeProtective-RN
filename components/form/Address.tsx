import React from 'react'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

import useMap from '../../hooks/useMap'
import { Container, Title, MapContainer } from './styles/AddressStyled'

export type Region = {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

// to store the current location in redux and retreieve it from there
const SF = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

interface Props {
  regionRef: any
}

const Address = (props: Props) => {
  const [address, setAddress] = React.useState<null | Location.Address>(null)
  const [region, setRegion] = React.useState<Region>(SF)
  const { map } = useMap(region, setRegion, setAddress)

  React.useEffect(() => {
    props.regionRef.current = region
  }, [region])

  return (
    <Container>
      <Title>Address</Title>
      <MapContainer>
        <MapView
          loadingEnabled
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={region}
          ref={map}
        />
      </MapContainer>
    </Container>
  )
}

export default Address
