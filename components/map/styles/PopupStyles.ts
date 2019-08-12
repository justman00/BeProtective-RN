import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const Container = styled.View`
  background: #fff;
  width: ${width * 0.5};
  height: ${height * 0.35};
  padding: 0;
  flex: 1;
  border-radius: 15;
  overflow: hidden;
  justify-content: space-between;
`

export const Image = styled.Image`
  width: 100%;
  height: 50%;
  z-index: 20;
  background: black;
`

export const Address = styled.View`
  padding: 10px;
`

export const Title = styled.Text`
  font-size: 18;
  color: green;
  margin-bottom: 10;
  font-weight: 600;
`

export const ButtonStyled = styled.TouchableOpacity`
  width: ${width * 0.75 * 0.5};
  background: green;
  height: 40;
  border-radius: 8;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const styles = {
  width: width * 0.5,
  borderRadius: 8,
  marginBottom: 10,
}

export const Text = styled.Text`
  font-size: ${props => props.size};
  color: ${props => props.color};
`
