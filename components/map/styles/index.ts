import { Dimensions, Image } from 'react-native'
import styled from 'styled-components'

const width = Dimensions.get('window').width

export const styles = {
  mapView: {
    flex: 1,
  },
}

export const StyledButton = styled.TouchableOpacity`
  background: #fff;
  height: 50px;
  width: ${width * 0.75};
  position: absolute;
  bottom: 30;
  left: 50%;
  margin-left: -${(width * 0.75) / 2};
  border-radius: 80px;
  justify-content: center;
`

export const StyledText = styled.Text`
  font-size: 24px;
  color: #31493c;
  text-align: center;
  font-weight: 600;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`
