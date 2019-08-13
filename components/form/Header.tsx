import React from 'react'
import { HeaderStyled } from './styles/HeaderStyled'

interface Props {
  uri: string
}

const Header = ({ uri }: Props) => {
  return <HeaderStyled source={{ uri }} />
}

export default Header
