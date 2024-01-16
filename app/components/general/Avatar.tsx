import Image from 'next/image'
import React from 'react'

import {RxAvatar} from 'react-icons/rx'
interface AvatarProps {
    image?: string
}
const Avatar:React.FC<AvatarProps> = ({image}) => {
   if(image) return <Image src={image} alt='' width={50} height={50} className='rounded'/>
   return <div><RxAvatar/></div>
}

export default Avatar