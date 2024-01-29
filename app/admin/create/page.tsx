import { getCurrentUser } from '@/app/actions/getCurrentuser'
import WarningText from '@/app/components/WarningText'
import CreateForm from '@/app/components/admin/CreateForm'
import AuthContainer from '@/app/components/containers/AuthContainer'
import React from 'react'

const CreateProduct = async() => {
  const currentUser = await getCurrentUser()
  if(!currentUser || currentUser.role !== "ADMIN"){
    return (
      <WarningText text="Buraya Giriş İzniniz Yok !!!"/>
    )
  }
  return (
    <AuthContainer>
      <CreateForm />
    </AuthContainer>
  )
}

export default CreateProduct