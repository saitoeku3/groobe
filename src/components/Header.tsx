import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <Title>
      <TitleLogo />
      <TitleText>groobe</TitleText>
    </Title>
    <SearchBox />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  padding: 0 32px;
`

const Title = styled.div`
  display: flex;
`

const TitleLogo = styled.div`
  width: 36px;
  height: 36px;
  background-color: #ddd;
  border-radius: 50%;
  margin: auto 12px auto 0;
`

const TitleText = styled.h1`
  margin: auto 0;
  font-size: 24px;
`

const SearchBox = styled.div``

export default Header
