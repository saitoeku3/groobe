import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { CurrentUser } from '../../domains/user'

type Props = {
  className?: string
  currentUser?: CurrentUser
}

const Layout: React.FC<Props> = ({ children, currentUser }) => (
  <Wrapper>
    <Header currentUser={currentUser} />
    <Main>{children}</Main>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Main = styled.main`
  width: 100%;
  height: 100%;
`

export default Layout
