import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import Head from '../components/common/Head'
import Layout from '../components/common/Layout'
import SignInWithApple from '../components/SignInWithApple'
import SignInWithSpotify from '../components/SignInWithSpotify'
import { useCurrentUser } from '../hooks/useCurrentUser'

const Index: NextPage = () => {
  const currentUser = useCurrentUser()

  return (
    <>
      <Head />
      <Layout currentUser={currentUser}>
        <Hero>
          <HeroTitle>好きな音楽を誰とでも</HeroTitle>
          <HeroText>
            groobe は、サービスを越えてあなたのプレイリストを共有できる音楽共有 SNS です。
          </HeroText>
          <TermText>
            <UnderLineText>利用規約</UnderLineText>に同意してアカウントを作成
          </TermText>
          <SignUpButtonList>
            <SignInWithApple />
            <SignInWithSpotify />
          </SignUpButtonList>
        </Hero>
      </Layout>
    </>
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

export default Index
