import React from 'react'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { Ionicons } from '@expo/vector-icons'
import MarkerComponent from './Marker'
import { NavigationProp } from '../../screens/MapScreen'
import { Container, styles, StyledButton, StyledText } from './styles'

type Region = {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

interface Props {
  navigation: NavigationProp
}

const SF = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const DATA = [
  {
    id: 1,
    coordinate: { latitude: 46.88951971168032, longitude: 28.930748795347922 },
    image:
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    address: '', // to get it from opencagedata API
  },
]

function Map(props: Props) {
  const [error, setError] = React.useState<string>('')
  const [region, setRegion] = React.useState<Region>(SF)
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

  return (
    <>
      <Container>
        <MapView
          loadingEnabled
          showsUserLocation
          style={styles.mapView}
          initialRegion={region}
          ref={map}
        >
          {DATA.map(marker => (
            <MarkerComponent
              navigation={props.navigation}
              {...marker}
              key={marker.id}
            />
          ))}
        </MapView>
      </Container>
      <StyledButton onPress={findMe} style={{ borderRadius: 20 }}>
        <StyledText>
          <Ionicons
            // @ts-ignore
            name='ios-search'
            size={24}
            color='green'
          />{' '}
          Find me
        </StyledText>
      </StyledButton>
    </>
  )
}

export default Map
