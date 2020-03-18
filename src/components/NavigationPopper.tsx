import React, { useCallback, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from './common/Icon'
import Thumbnail from './common/Thumbnail'
import { CurrentUser } from '../domains/user'

type Props = {
  currentUser?: CurrentUser
  close: (event?: MouseEvent) => void
}

const NavigationPopper: React.FC<Props> = ({ currentUser, close }) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleoutsideClick = useCallback(
    (event: MouseEvent) => {
      const isClickedInside = ref.current?.contains(event.target as Node)
      if (isClickedInside) return
      close(event)
    },
    [close]
  )

  useEffect(() => {
    document.body.addEventListener('click', handleoutsideClick)
    return () => {
      document.body.removeEventListener('click', handleoutsideClick)
    }
  })

  return createPortal(
    <Wrapper ref={ref}>
      <Link href="/users/[id]" as={`/users/${currentUser?.id}`}>
        <UserInfo>
          <UserThumbnail src={currentUser?.imageUrl} circle />
          <UserName>{currentUser?.name}</UserName>
        </UserInfo>
      </Link>
      <Link href="/settings/profile">
        <LinkContainer>
          <Icon name="cog" />
          <LinkText>設定</LinkText>
        </LinkContainer>
      </Link>
      <Link href="/api/signout">
        <LinkContainer>
          <Icon name="signOut" />
          <LinkText>サインアウト</LinkText>
        </LinkContainer>
      </Link>
    </Wrapper>,
    document.body
  )
}

const Wrapper = styled.div`
  width: 240px;
  position: absolute;
  top: 64px; /* header height */
  right: 32px; /* header right padding */
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 6px;
  box-sizing: border-box;
  padding-bottom: 8px;
`

const UserInfo = styled.a`
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  box-sizing: border-box;
  display: flex;
  margin-bottom: 8px;
  padding: 12px 16px;
  transition: background-color 0.15s;
  &:hover {
    background-color: ${({ theme }) => theme.color.hoverd};
  }
`

const UserThumbnail = styled(Thumbnail)`
  width: 44px;
  height: 44px;
`

const UserName = styled.div`
  margin: auto auto auto 12px;
  font-size: 18px;
  font-weight: 600;
`

const LinkContainer = styled.a`
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  padding: 12px 16px;
  transition: background-color 0.15s;
  &:hover {
    background-color: ${({ theme }) => theme.color.hoverd};
  }
`

const LinkText = styled.div`
  margin: auto 0 auto 4px;
`

export default NavigationPopper
