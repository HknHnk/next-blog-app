'use client'
import React from 'react'
import { useRouter } from 'next/router'
import { blog_data, assets } from '@/Assets/assets.js'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/Components/Footer'

const Page = () => {
    const router = useRouter();
    const { id, pdf } = router.query;
    const note = blog_data.find(item => item.id === parseInt(id));

    if (!note) {
        return <p>Note not found</p>
    }

    return (
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src={assets.icon} width={180} height={60} alt='Logo' className='w-[130px] sm:w-auto' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                    Get start <Image src={assets.arrow} width={20} height={20} alt='Arrow' />
                </button>E
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{note.title}</h1>
                <Image className='mx-auto mt-6 border border-white rounded-full' src={note.author_img} width={60} height={60} alt='' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{note.author}</p>
                <p>{note.category}</p>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white' src={note.image} width={1280} height={720} alt='' />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p>{note.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Xingzhi Lu</h3>
                <p className='my-3'>placeholder</p>
                {pdf && (
                    <div className='mt-3'>
                        <Link href={pdf}>
                            <a target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>
                                View PDF
                            </a>
                        </Link>
                    </div>
                )}
                <div className='my-24'>
                    <p className='text-black font font-semibold my-4'>Share the website with your friends</p>
                    <div className='flex'>
                        <Image src={assets.ig} width={50} height={50} alt='' />
                        <Image src={assets.teams} width={50} height={50} alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page