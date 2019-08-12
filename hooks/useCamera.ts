import React, { ReactText } from 'react'
import { StatusBar } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'

const reverseCameras = {
  [Camera.Constants.Type.back]: Camera.Constants.Type.front,
  [Camera.Constants.Type.front]: Camera.Constants.Type.back,
}

type Image = {
  height: number
  width: number
  uri: string
}

type State = {
  hasPermissions: null | boolean
  type: ReactText
  showImage: boolean
  image: Image | null
}

type Action = {
  type: ReactText
  payload?: Image
}

const initialState: State = {
  hasPermissions: null,
  type: Camera.Constants.Type.back,
  showImage: false,
  image: null,
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'allowCamera':
      return { ...state, hasPermissions: true }
    case 'reverseCamera':
      return { ...state, type: reverseCameras[state.type] }
    case 'refuseCamera':
      return { ...state, hasPermissions: false }
    case 'takePicture':
      return { ...state, showImage: true, image: action.payload }
    case 'backToCamera':
      return { ...state, showImage: false, image: null }
    default:
      return state
  }
}

export default function useCamera() {
  const cameraRef = React.useRef()
  const [state, dispatch] = React.useReducer(reducer, initialState)

  function reverseCamera() {
    dispatch({ type: 'reverseCamera' })
  }

  function setBack() {
    dispatch({ type: 'backToCamera' })
  }

  async function takePicture() {
    if (cameraRef.current) {
      // @ts-ignore
      const image = await cameraRef.current.takePictureAsync()
      dispatch({ type: 'takePicture', payload: image })
    }
  }

  React.useEffect(() => {
    StatusBar.setHidden(true)

    async function askPermissions() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA)

      if (status === 'granted') {
        dispatch({ type: 'allowCamera' })
      }
    }

    askPermissions()
  }, [])

  return {
    ...state,
    cameraRef,
    reverseCamera,
    takePicture,
    setBack,
  }
}
