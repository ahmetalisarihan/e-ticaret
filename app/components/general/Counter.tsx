import React from 'react'
import { CardProductProps } from '../detail/DetailClient'

interface CounterProps {
    cardProduct : CardProductProps
    increaseFunc: () => void
    decreaseFunc: () => void
}
const Counter: React.FC<CounterProps> = ({ cardProduct, increaseFunc, decreaseFunc }) => {
    const buttonStyle = 'size-8 rounded-md border border-gray-300 text-lg flex items-center justify-center cursor-pointer'
  return (
    <div className='flex items-center gap-2'>
        <div className={buttonStyle} onClick={decreaseFunc}>-</div>
        <div className='text-lg md:text-xl'>{cardProduct?.quantity}</div>
        <div className={buttonStyle} onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter