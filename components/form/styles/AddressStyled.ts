import styled from 'styled-components'
import { height, width } from './HeaderStyled'

export const Container = styled.View`
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: green;
`

export const MapContainer = styled.View`
  margin: 15px auto;

  width: 100%;
  height: ${height * 0.3};
  border-radius: 15;
  overflow: hidden;
`
