import styled from 'styled-components'

export const styles = {
  camera: {
    flex: 1,
  },
  linearGradient: {
    style: {
      width: '100%',
      height: '12%',
      position: 'absolute',
      bottom: 0,
      padding: 15,
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    colors: ['#4c669f', '#3b5998', '#192f6a'],
  },
}

export const TakePicture = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border: 3px solid #fff;
`

export const Shoot = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
`
export const Container = styled.View`
  flex: 1;
`

export const ReverseCamera = styled.TouchableOpacity``

export const Close = styled.TouchableOpacity`
  position: absolute;
  left: 25;
  top: 30;
  z-index: 20;
`
