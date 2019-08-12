import React, { ReactText } from 'react'
import { Camera } from 'expo-camera'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { NavigationProp } from '../../screens/MapScreen'
import {
  Container,
  styles,
  TakePicture,
  ReverseCamera,
  Shoot,
  Close,
} from './styles/CameraComponentStyles'

interface Props {
  type: ReactText
  reverseCamera: () => void
  cameraRef: any
  takePicture: () => Promise<void>
  goBack: () => void
}

function CameraComponent({
  type,
  reverseCamera,
  cameraRef,
  takePicture,
  goBack,
}: Props) {
  return (
    <Container>
      <Close onPress={goBack}>
        <Ionicons
          // @ts-ignore
          name='ios-close'
          size={50}
          color={'#fff'}
        />
      </Close>
      <Camera ref={cameraRef} style={styles.camera} type={type}>
        <LinearGradient
          // should adjust colors
          colors={styles.linearGradient.colors}
          // @ts-ignore
          style={styles.linearGradient.style}
        >
          <ReverseCamera onPress={reverseCamera}>
            <Ionicons
              // @ts-ignore
              name='ios-reverse-camera'
              size={50}
              color='#fff'
            />
          </ReverseCamera>
          <TakePicture onPress={takePicture}>
            <Shoot />
          </TakePicture>
          <Ionicons
            // @ts-ignore
            name='ios-photos'
            size={50}
            color='#fff'
          />
        </LinearGradient>
      </Camera>
    </Container>
  )
}

export default CameraComponent
