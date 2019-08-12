import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
`

export const Image = styled.Image`
  flex: 1;
`

export const ButtonStyled = styled.TouchableOpacity`
  position: absolute;
  bottom: 50;
  left: ${props => (props.position === 'left' ? 30 : 'auto')};
  right: ${props => (props.position === 'right' ? 30 : 'auto')};
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: ${props => props.background};
  padding: 15px;
`

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 600;

  color: ${props => props.color};
`

export const styles = {
  arrowLeft: {
    marginRight: 10,
  },
  arrowRight: {
    marginLeft: 10,
  },
}
