import { IService } from '@/types'
import Image from 'next/image';
import React from 'react'

interface ServiceIteamProp {
    service: IService;
}

const ServiceIteam: React.FC<ServiceIteamProp> = ({ service }) => {
    return (
        <div className={`w-full py-16 px-8 ${service.id === 2 ? "" : "md:border-r-[1px] border-b-[1px]"}  bg-[#101010] border-white/15 flex flex-col gap-6 group cursor-pointer`}>
            <div className='relative w-20 aspect-square'>
                <Image
                    alt='project image'
                    src={service.imageUrl}
                    fill
                    className='object-cover z-20 opacity-40 group-hover:opacity-100 group-active:opacity-100 duration-500'
                />
                <div className='absolute w-20 scale-75 aspect-square rounded-full bg-white/5 z-10 translate-x-1/2 
                group-hover:translate-x-0 group-active:translate-x-0 duration-500 group-hover:scale-[140%]  group-active:scale-[140%]'></div>
            </div>
            <h1 className='text-3xl font-medium leading-none group-hover:text-amber-600 group-active:text-amber-600 duration-500 cursor-pointer'>{service.title}</h1>
            <p className='text-lg text-[#919195]'>{service.description}</p>
            <div className='flex'>
                <div className='p-4 bg-gray-700/20 hover:bg-amber-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                        className="size-6 group-hover:-rotate-45 group-active:-rotate-45 duration-500"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ServiceIteam;