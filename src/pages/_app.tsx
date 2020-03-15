import React from 'react'
import { SessionAppContext } from 'next/app'
import { CurrentUser, User } from '../domains/user'
import { axios } from '../lib/axios'
import '../assets/styles/common.css'

const App = ({
  Component,
  currentUser,
  ...pageProps
}: SessionAppContext & { currentUser?: CurrentUser }) => (
  <Component currentUser={currentUser} {...pageProps} />
)

App.getInitialProps = async ({ Component, ctx }: SessionAppContext) => {
  const pageProps = await Component.getInitialProps?.(ctx)
  const { id, accessToken } = ctx.req?.session?.passport?.user ?? { id: '', accessToken: '' }

  if (!id || !accessToken) {
    return { pageProps, currentUser: undefined }
  }

  const {
    data: { user }
  } = await axios.get<{ user: User }>(`/api/users/${id}`)

  return {
    pageProps,
    currentUser: { ...user, accessToken }
  }
}

export default App
