import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets.js'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className ='flex flex-col bg-slate-100 h-full fixed top-0 left-0 w-28 sm:w-80 border-r border-black'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.icon} width={120} alt=''/>
            </div>    
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[50%] absolute right-0'>
                    <Link href='/admin/addProduct' className='flex items-center border-b border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]' >
                        <Image src={assets.add_icon} alt=''width={28}/> <p>Add notes</p>
                    </Link>
                    <Link href='/admin/noteList' className='mt-5 flex items-center border-b border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]' >
                        <Image src={assets.icon} alt=''width={28}/> <p>Note lists</p>
                    </Link>
                    <Link href='/admin/subscriptions' className='mt-5 items-center border-b border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]' >
                        <Image src={assets.teams} alt=''width={28}/> <p>Subscriptions</p>
                    </Link>
                </div>
                 

                </div>
            </div>
    )
}

export default Sidebar