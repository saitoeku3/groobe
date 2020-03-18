import React from 'react'
import { NextPage } from 'next'
import Head from '../../components/common/Head'
import Layout from '../../components/common/Layout'
import { useCurrentUser } from '../../hooks/useCurrentUser'

const Profile: NextPage = () => {
  const currentUser = useCurrentUser()

  return (
    <>
      <Head title="プロフィールを編集" />
      <Layout currentUser={currentUser}></Layout>
    </>
  )
}

export default Profile
