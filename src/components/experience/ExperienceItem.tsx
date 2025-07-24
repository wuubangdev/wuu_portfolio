import { IExperience } from '@/types'
import Image from 'next/image'
import React from 'react'


const ExperienceItem: React.FC<{ exp: IExperience }> = ({ exp }) => {
    return (
        <div className='flex flex-col gap-4 bg-[#101010] px-4 py-6 cursor-pointer items-center group '>
            <div className='w-2/3 aspect-[16/9] relative'>
                <Image
                    src={exp.imageUrl}
                    alt='company'
                    fill
                    className='object-cover group-hover:scale-110 group-active:scale-110 transition-all duration-300 ease-in-out'
                />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-[1.5rem] text-amber-600 font-medium uppercase text-center group-hover:text-white group-active:text-amber-800
                transition-all duration-300 ease-in-out'>
                    {exp.company}
                </h1>
                <h1 className='text-[1.2rem] group-hover:text-amber-600 group-active:text-amber-600 font-medium text-center transition-all duration-300 ease-in-out'>{exp.time}</h1>
                <p className='text-[1.2rem] text-center group-hover:text-amber-600 group-active:text-amber-600 transition-all duration-300 ease-in-out'>{exp.title}</p>
            </div>
        </div>
    )
}

export default ExperienceItem