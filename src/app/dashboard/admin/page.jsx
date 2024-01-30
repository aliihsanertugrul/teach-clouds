import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import AdminList from '@/components/dashboard/admin/admin-list'
import { getAllAdminsByPage } from '@/services/admin-service'
import React from 'react'

const AdminPage =async () => {

  const res=await getAllAdminsByPage();
  const data=await res.json()
  if(!res.ok) throw new Error(data.message)
  // console.log(data)






  return (
    <>
        <PageHeader title="Admin"/>
        <Spacer height={50}/>
        <AdminList data={data}/>
        <Spacer/>
    </>
  )
}

export default AdminPage