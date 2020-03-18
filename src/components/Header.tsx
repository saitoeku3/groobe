import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from './common/Button'
import Icon from './common/Icon'
import Thumbnail from './common/Thumbnail'
import { CurrentUser } from '../domains/user'

type Props = {
  currentUser?: CurrentUser
}

const Header: React.FC<Props> = ({ currentUser }) => (
  <Wrapper>
    <Link href="/">
      <Title>groobe</Title>
    </Link>
    <Navigation>
      <SubmitButton color="gray" flat>
        <Icon name="upload" />
        <SubmitButtonText>プレイリストを投稿</SubmitButtonText>
      </SubmitButton>
      {currentUser && (
        <Link href="/users/[id]" as={`/users/${currentUser.id}`}>
          <UserThumbnail src={currentUser.imageUrl} circle hoverable />
        </Link>
      )}
    </Navigation>
  </Wrapper>
)

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 10px 32px;
`

const Title = styled.a`
  cursor: pointer;
  display: flex;
  margin: auto 0;
  font-size: 28px;
  font-weight: bold;
`

const Navigation = styled.nav`
  display: flex;
`

const SubmitButton = styled(Button)`
  height: 100%;
  border-radius: 25px;
  box-sizing: border-box;
  display: flex;
  margin: auto 12px auto 0;
  padding: 0 20px;
  &:last-child {
    margin: auto 0;
  }
`

const SubmitButtonText = styled.span`
  margin: auto 0 auto 4px;
`

const UserThumbnail = styled(Thumbnail)`
  width: 44px;
  height: 44px;
`

export default Header
