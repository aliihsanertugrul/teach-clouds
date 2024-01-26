import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Contact from '@/components/contact/contact'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <PageHeader title="Contact"/>
      <Spacer/>
      <Contact/>
    </div>
  )
}

export default ContactPage