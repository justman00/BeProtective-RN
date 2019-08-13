import React from 'react'
import { Text, View, Image } from 'react-native'
import useCamera from '../../hooks/useCamera'
import CameraComponent from './CameraComponent'

import { NavigationProp } from '../../screens/MapScreen'
import PictureComponent from './PictureComponent'

interface Props {
  navigation: NavigationProp
}

function Camera(props: Props) {
  const {
    type,
    showImage,
    image,
    cameraRef,
    hasPermissions,
    reverseCamera,
    takePicture,
    setBack,
  } = useCamera()

  function goBack() {
    props.navigation.navigate('Map')
  }

  function goToForm() {
    props.navigation.navigate('Form', {
      image: image.uri,
    })
  }

  if (hasPermissions === null) {
    return <View />
  } else if (hasPermissions === false) {
    return <Text>No access to camera</Text>
  } else {
    if (showImage) {
      return (
        <PictureComponent image={image} setBack={setBack} goToForm={goToForm} />
      )
    } else {
      return (
        <CameraComponent
          cameraRef={cameraRef}
          type={type}
          reverseCamera={reverseCamera}
          takePicture={takePicture}
          goBack={goBack}
        />
      )
    }
  }
}

export default Camera
