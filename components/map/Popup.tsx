import React from 'react'

import { CalloutSubview } from 'react-native-maps'

import { NavigationProp } from '../../screens/MapScreen'
import {
  Container,
  Image,
  Address,
  Title,
  Text,
  ButtonStyled,
  styles,
} from './styles/PopupStyles'

interface Props {
  image: string
  navigation: NavigationProp
}

function Popup(props: Props) {
  return (
    <Container>
      <Image resizeMode='cover' source={{ uri: props.image }} />
      <Address>
        <Title>Address:</Title>
        <Text color='black' size={15}>
          Some random address here
        </Text>
      </Address>
      <CalloutSubview
        style={[styles]}
        onPress={() => props.navigation.navigate('Details')}
      >
        <ButtonStyled>
          <Text color='#fff' size={18}>
            More
          </Text>
        </ButtonStyled>
      </CalloutSubview>
    </Container>
  )
}

export default Popup
