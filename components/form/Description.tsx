import React from 'react'
import {
  Container,
  TextFieldContainer,
  TextField,
} from './styles/DescriptionStyled'

interface Props {
  inputRef: any
}

const Description = (props: Props) => {
  return (
    <Container>
      <TextFieldContainer>
        <TextField
          ref={props.inputRef}
          editable
          multiline
          numberOfLines={4}
          clearTextOnFocus
          defaultValue='Please provide some details of the issue you have enountered'
        />
      </TextFieldContainer>
    </Container>
  )
}

export default Description
