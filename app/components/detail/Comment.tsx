import React from 'react'
import Avatar from '../general/Avatar'
import { RxAvatar } from 'react-icons/rx'
import { Rating } from '@mui/material'

const Comment = ({prd} : {prd: any}) => {
  return (
    <div className='border w-full md:w-1/3 p-2 rounded-lg my-3'>
       
       <div className='flex items-center gap-1'>
       <Avatar image={prd?.user?.image}/>
         <div>
            <div>{prd?.user?.name}</div>
            <Rating name="read-only" value={prd?.user?.rating} readOnly />
         </div>
       </div>
       <div className='text-slate-500'>{prd.comment}</div>
    </div>
  )
}

export default Comment