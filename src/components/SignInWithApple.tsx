import React, { forwardRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import appleLogo from '../assets/images/apple-logo.png'

type Props = {
  onClick?: () => void
  href?: string
}

const SignInWithApple = forwardRef<HTMLAnchorElement, Props>(({ onClick, href }, ref) => (
  <Link href="/sign-in-with-apple">
    <Wrapper href={href} onClick={onClick} ref={ref}>
      <Logo src={appleLogo} alt="apple logo" />
      <Text>Sign up with Apple</Text>
    </Wrapper>
  </Link>
))

const Wrapper = styled.a`
  width: 340px;
  height: 56px;
  background-color: #000;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  margin: 0 24px;
`

const Logo = styled.img`
  height: 100%;
  margin: auto 0 auto 32px;
`

const Text = styled.div`
  color: #fff;
  font-size: 24px;
  line-height: 24px;
  margin: auto auto auto 8px;
`

export default SignInWithApple
