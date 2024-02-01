import { getCurrentUser } from '@/app/actions/getCurrentuser'
import getProducts from '@/app/actions/getproducts'
import WarningText from '@/app/components/WarningText'
import ManageClient from "@/app/components/admin/ManageClient"
import React from 'react'

const Manage = async () => {
    const products = await getProducts({category: null})
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role !== "ADMIN"){
        return (
            <WarningText text="Buraya Girişin Yasaklı !!!"/>
        )
    }

  return (
    <div className='w-full m-2'><ManageClient products={products}/></div>
    
  )
}

export default Manage