import React from 'react'
import {assets} from '@/Assets/assets.js'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.cc} alt='' widht={120}/>
            <p className='text-sm text-white'>All rights reserved. Copyright @students</p>  
                <div className='flex'>
                    <Image src={assets.ig} alt=''width={100}/>
                    <Image src={assets.teams} alt=''width={100}/>
                </div>
        </div>
    )
}

export default Footer