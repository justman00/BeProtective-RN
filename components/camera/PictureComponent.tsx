import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import {
  ButtonStyled,
  Text,
  Container,
  Image,
  styles,
} from './styles/PictureComponentStyles'

type Image = {
  height: number
  width: number
  uri: string
}

interface Props {
  image: Image
  setBack: () => void
  goToForm: () => void
}

function PictureComponent({ image, setBack, goToForm }: Props) {
  return (
    <Container>
      <Image source={{ uri: image.uri }} />
      <ButtonStyled background='red' position='left' onPress={setBack}>
        <Ionicons
          // @ts-ignore
          style={styles.arrowLeft}
          name='ios-arrow-back'
          size={24}
          color='#fff'
        />
        <Text color='#fff'>Back</Text>
      </ButtonStyled>
      <ButtonStyled background='#fff' position='right' onPress={goToForm}>
        <Text color='black'>Next</Text>
        <Ionicons
          // @ts-ignore
          style={styles.arrowRight}
          name='ios-arrow-forward'
          size={24}
        />
      </ButtonStyled>
    </Container>
  )
}

export default PictureComponent
