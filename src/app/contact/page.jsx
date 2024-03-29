import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/misc/spacer'
import Contact from '@/components/contact/contact'
import React from 'react'

const ContactPage = async () => {
  return (
    <>
      <PageHeader title="Contact"/>
      <Spacer height={50}/>
      <Contact/>

    </>
  )
}

export default ContactPage