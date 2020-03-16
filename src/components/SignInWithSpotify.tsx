import React, { forwardRef } from 'react'
import styled from 'styled-components'
import spotifyLogo from '../assets/images/spotify-logo.png'

type Props = {
  onClick?: () => void
  href?: string
}

const SignInWithSpotify = forwardRef<HTMLAnchorElement, Props>(({ onClick, href }, ref) => (
  <Wrapper href={href} onClick={onClick} ref={ref}>
    <Logo src={spotifyLogo} />
    <Text>Sign up with Spotify</Text>
  </Wrapper>
))

const Wrapper = styled.a`
  width: 340px;
  height: 56px;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  margin: 0 24px;
`

const Logo = styled.img`
  height: 65%;
  margin: auto 0 auto auto;
`

const Text = styled.div`
  color: #1db954;
  font-size: 24px;
  line-height: 24px;
  margin: auto auto auto 16px;
`

export default SignInWithSpotify
