import React from 'react'
import { ScrollView } from 'react-native'
import { NavigationProp } from '../../screens/MapScreen'
import { Container } from './styles'
import Header from './Header'
import Address from './Address'

interface Props {
  image: string
  navigation: NavigationProp
}

const Form = (props: Props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Header uri={props.image} />
        <Address />
      </Container>
    </ScrollView>
  )
}

export default Form
