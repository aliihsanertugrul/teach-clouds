import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import LoginForm from '@/components/login/login-form'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <PageHeader title="login"/>
      <Spacer/>
      <LoginForm/>
      <Spacer/>
    </div>
  )
}

export default LoginPage