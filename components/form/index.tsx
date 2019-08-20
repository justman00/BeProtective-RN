import React from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp } from '../../screens/MapScreen'
import { Container, SubmitButton, SubmitText, GoBack } from './styles'
import Header from './Header'
import Address from './Address'
import Description from './Description'

interface Props {
  image: string
  navigation: NavigationProp
}

const Form = (props: Props) => {
  const inputRef = React.useRef()
  const regionRef = React.useRef()

  function handleSubmit() {
    // api call through redux fn(inputRef.current, regionRef.current)
  }

  function goBack() {
    props.navigation.goBack()
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior='position'
        enabled
        // keyboardVerticalOffset={5}
      >
        <Container>
          <GoBack onPress={goBack}>
            <Ionicons
              // @ts-ignore
              name='ios-close-circle'
              size={44}
              color='#fff'
            />
          </GoBack>
          <Header uri={props.image} />
          <Address regionRef={regionRef} />
          <Description inputRef={inputRef} />
          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Submit</SubmitText>
          </SubmitButton>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Form
