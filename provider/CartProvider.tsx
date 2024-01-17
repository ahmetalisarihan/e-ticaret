import { CardContextProvider } from '@/hooks/useCart'
import React from 'react'

const CartProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <CardContextProvider>{children}</CardContextProvider>
  )
}

export default CartProvider