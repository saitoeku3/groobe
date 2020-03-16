import React, { useEffect } from 'react'
import { SessionNextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Index: SessionNextPage = ({ currentUser }) => {
  useEffect(() => console.log(currentUser), [currentUser])

  return (
    <Layout>
      <Hero>
        <HeroTitle>好きな音楽を誰とでも</HeroTitle>
        <HeroText>
          groobe は、サービスを越えてあなたのプレイリストを共有できる音楽共有 SNS です。
        </HeroText>
        <TermText>
          <UnderLineText>利用規約</UnderLineText>に同意してアカウントを作成
        </TermText>
        <SignUpButtonList>
          <Link href="/sign-in-with-apple">
            <SignUpButton>Sign In with Applle</SignUpButton>
          </Link>
          <Link href="/sign-in-with-spotify">
            <SignUpButton>Sign In with Spotify</SignUpButton>
          </Link>
        </SignUpButtonList>
      </Hero>
    </Layout>
  )
}

const Hero = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
`

const HeroTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
  margin: auto auto 12px;
`

const HeroText = styled.p`
  margin: 0 auto 64px;
`

const TermText = styled.div`
  margin: 0 auto 24px;
`

const UnderLineText = styled.span`
  margin-right: 4px;
  text-decoration: underline;
`

const SignUpButtonList = styled.div`
  display: flex;
  margin: 0 auto auto;
`

const SignUpButton = styled.div`
  width: 300px;
  height: 56px;
  background-color: #fff;
  cursor: pointer;
  margin: 0 24px;
`

export default Index
