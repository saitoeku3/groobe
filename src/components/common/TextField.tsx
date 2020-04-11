import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField: React.FC<Props> = props => <Input {...props} />

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 6px;
  box-sizing: border-box;
  caret-color: #222;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  font-size: 18px;
  padding: 16px;
`

export default TextField
