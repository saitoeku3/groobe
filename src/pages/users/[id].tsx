import React from 'react'
import { NextPage } from 'next'
import Head from '../../components/common/Head'
import Layout from '../../components/common/Layout'
import { User, UserService } from '../../domains/user'
import { axios } from '../../lib/axios'
import { useCurrentUser } from '../../hooks/useCurrentUser'

type Props = {
  user?: User
}

const UsersShow: NextPage<Props> = ({ user }) => {
  const currentUser = useCurrentUser()
  return (
    <>
      <Head title={user?.name} />
      <Layout currentUser={currentUser}></Layout>
    </>
  )
}

UsersShow.getInitialProps = async ({ query }) => {
  const { id } = query as { id: string }
  const userService = new UserService(axios)
  const user = await userService.find({ id })

  return {
    user
  }
}

export default UsersShow
