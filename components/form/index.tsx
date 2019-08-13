import React from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { NavigationProp } from '../../screens/MapScreen'
import { Container, SubmitButton, SubmitText } from './styles'
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

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior='position'
        enabled
        keyboardVerticalOffset={5}
      >
        <Container>
          <Header uri={props.image} />
          <Address regionRef={regionRef} />
          <Description inputRef={inputRef} />
          <SubmitButton onPress={() => {}}>
            <SubmitText>Submit</SubmitText>
          </SubmitButton>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Form
