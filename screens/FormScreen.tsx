import React from 'react'
import { NavigationProp } from './MapScreen'
import Form from '../components/form'

interface Props {
  navigation: NavigationProp
}

const FormScreen = (props: Props) => {
  // second parameter is a default value for it
  const image = props.navigation.getParam('image')

  return <Form {...props} image={image} />
}

export default FormScreen
