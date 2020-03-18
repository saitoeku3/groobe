import React from 'react'
import { SessionAppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { theme } from '../constants/theme'
import { UserService } from '../domains/user'
import { CurrentUserProvider } from '../hooks/useCurrentUser'
import { axios } from '../lib/axios'
import '../assets/styles/common.css'

const App = ({ Component, currentUser, ...pageProps }: SessionAppContext) => (
  <ThemeProvider theme={theme}>
    <CurrentUserProvider currentUser={currentUser}>
      <Normalize />
      <Component {...pageProps} />
    </CurrentUserProvider>
  </ThemeProvider>
)

App.getInitialProps = async ({ Component, ctx }: SessionAppContext) => {
  const pageProps = (await Component.getInitialProps?.(ctx)) ?? {}
  const { id, accessToken } = ctx.req?.session?.passport?.user ?? { id: '', accessToken: '' }

  if (!id || !accessToken) {
    return { ...pageProps, currentUser: undefined }
  }

  const userService = new UserService(axios)
  const user = await userService.find({ id })

  return {
    ...pageProps,
    currentUser: { ...user, accessToken }
  }
}

export default App
