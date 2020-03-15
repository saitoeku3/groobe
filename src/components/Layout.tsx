import React from 'react'
import styled from 'styled-components'
import Header from './Header'

type Props = {
  className?: string
}

const Layout: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Main = styled.main`
  width: 100%;
  height: calc(100% - 56px);
`

export default Layout
