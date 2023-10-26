import Image from 'next/image'
import React from 'react'

const Aboutme = () => {
  return (
    <div className='bg-[#FFF6EA] rounded-sm border-[0.1em] border-black w-fit px-4 gap-8 flex flex-col '>

<div className="w-full text-end">
    <p className="">About me</p>
</div>

<div className="m-auto w-fit">
    <Image src='/mercy.png' alt='pic' width={100} height={100} className='w-full object-cover' />
</div>

<div className="w-full">
    <h1 className="font-bold">HNG i9 Finalist</h1>
    <p className="">In search of full-time product design roles</p>
</div>
    </div>
  )
}

export default Aboutme