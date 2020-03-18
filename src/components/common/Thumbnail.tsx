import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  alt?: string
  className?: string
  circle?: boolean
  hoverable?: boolean
  src?: string
} & React.HTMLAttributes<HTMLDivElement>

const Thumbnail = forwardRef<HTMLDivElement, Props>(
  ({ circle = false, hoverable = false, src = '', ...props }, ref) => (
    <Img ref={ref} src={src} circle={circle} hoverable={hoverable} {...props} />
  )
)

const Img = styled.div<Pick<Props, 'circle' | 'hoverable' | 'src'>>`
  background-color: ${({ theme }) => theme.color.gray};
  background-image: ${({ src }) => src && `url(${src})`};
  background-position: center;
  border-radius: ${({ circle }) => circle && '50%'};
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  ${({ hoverable }) =>
    hoverable &&
    css`
    cursor: pointer;
    transition: filter 0.15s;
    &:hover {
      filter: brightness(0.9);
  `}
`

export default Thumbnail
