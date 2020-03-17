import React from 'react'
import { SessionAppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { theme } from '../constants/theme'
import { CurrentUser, UserService } from '../domains/user'
import { axios } from '../lib/axios'
import '../assets/styles/common.css'

const App = ({
  Component,
  currentUser,
  ...pageProps
}: SessionAppContext & { currentUser?: CurrentUser }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <Component currentUser={currentUser} {...pageProps} />
  </ThemeProvider>
)

App.getInitialProps = async ({ Component, ctx }: SessionAppContext) => {
  const pageProps = await Component.getInitialProps?.(ctx)
  const { id, accessToken } = ctx.req?.session?.passport?.user ?? { id: '', accessToken: '' }

  if (!id || !accessToken) {
    return { pageProps, currentUser: undefined }
  }

  const userService = new UserService(axios)
  const user = await userService.find({ id })

  return {
    pageProps,
    currentUser: { ...user, accessToken }
  }
}

export default App
