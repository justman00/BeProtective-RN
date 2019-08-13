import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height

export const HeaderStyled = styled.Image`
  width: ${width};
  height: ${height * 0.3};
`
