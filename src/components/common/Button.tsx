import React from 'react'
import styled from 'styled-components'
import { Color } from '../../constants/theme'

type Props = {
  className?: string
  color?: Color
  dark?: boolean
  flat?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({
  children,
  color = 'white',
  dark = false,
  flat = false,
  ...props
}) => (
  <StyledButton color={color} dark={dark} flat={flat} {...props}>
    {children}
  </StyledButton>
)

const StyledButton = styled.button<Pick<Props, 'color' | 'dark' | 'flat'>>`
  background-color: ${({ theme, color }) => color && theme.color[color]};
  border: ${({ flat }) => (flat ? 'none' : `1px solid #dedede`)};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ dark }) => (dark ? '#fff' : '#222')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-weight: 550;
  padding: 12px 24px;
  transition: filter 0.15s;
  &:hover {
    filter: ${({ disabled }) => (disabled ? '' : 'brightness(0.9)')};
  }
  &:focus {
    filter: ${({ disabled }) => (disabled ? '' : 'brightness(0.9)')};
    outline: none;
  }
`

export default Button
