import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
`
export const SubmitButton = styled.TouchableOpacity`
  margin: 30px auto;
  border-radius: 15px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: green;
  padding: 10px 35px;
`

export const SubmitText = styled.Text`
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  font-size: 24px;
`

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 20;
  left: 20;
  z-index: 50;
`
