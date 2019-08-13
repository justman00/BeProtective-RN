import styled from 'styled-components'
import { height } from './HeaderStyled'

export const Container = styled.View`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`

export const TextFieldContainer = styled.View`
  width: 100%;
  border-radius: 15;
  overflow: hidden;
  border: 2px solid green;
  min-height: ${height * 0.15};
`

export const TextField = styled.TextInput`
  flex: 1;
  color: darkgray;
  font-size: 18px;
  padding: 15px;
`
