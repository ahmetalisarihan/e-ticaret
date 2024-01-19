"use client";
import useCart from '@/hooks/useCart';
import React from 'react'
import { BsCart3 } from "react-icons/bs";

const CardCount = () => {
  const {cartPrdcts} = useCart()

  return (
    <div className='hidden md:flex relative'>
      <BsCart3 size={25}/>
      <div className='absolute -top-2 -right-3 text-xs bg-rose-600 w-5 h-5 flex items-center justify-center rounded-full'>{cartPrdcts?.length}</div>
    </div>
  )
}

export default CardCount