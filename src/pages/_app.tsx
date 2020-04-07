import React from 'react'
import { AppPageProps, SessionAppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { theme } from '~/constants/theme'
import { UserService } from '~/domains/user'
import { CurrentUserProvider } from '~/hooks/useCurrentUser'
import '~/assets/styles/common.css'

const App = ({ currentUser, pageProps, Component }: AppPageProps) => (
  <ThemeProvider theme={theme}>
    <CurrentUserProvider currentUser={currentUser}>
      <Normalize />
      <Component {...pageProps} />
    </CurrentUserProvider>
  </ThemeProvider>
)

App.getInitialProps = async ({ ctx, Component }: SessionAppContext) => {
  const pageProps = (await Component.getInitialProps?.(ctx)) ?? {}
  const { id, accessToken } = ctx.req?.session?.passport?.user ?? { id: '', accessToken: '' }

  if (!id || !accessToken) {
    return {
      pageProps,
      currentUser: undefined
    }
  }

  const userService = new UserService()
  const user = await userService.find({ id })

  return {
    pageProps,
    currentUser: { ...user, accessToken }
  }
}

export default App
