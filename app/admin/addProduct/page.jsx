'use client'
import React, {useState}from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets.js'

const Page = () => {
    
    const [image,setImage] = useState(false)

    return (
        <>
            <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor='image'>
                        <Image className='mt-4'src={!image?assets.upload:URL.createObjectURL(image)} width={140} height={70} alt='' />
                </label>
            <input onChange={(e)=>setImage(e.target.files[0])}type='file' id='image' hidden required />
            </form> 
        </>
    )
}

export default Page