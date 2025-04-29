import { IExperience } from '@/types'
import Image from 'next/image'
import React from 'react'


const ExperienceItem: React.FC<{ exp: IExperience }> = ({ exp }) => {
    return (
        <div className='flex flex-col gap-4 bg-[#101010] px-4 py-6 cursor-pointer items-center'>
            <div className='w-2/3 aspect-[16/9] relative'>
                <Image
                    src={exp.imageUrl}
                    alt='company'
                    fill
                    className='object-cover'
                />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-[1.5rem] text-amber-600 font-medium uppercase text-center'>{exp.company}</h1>
                <p className='text-[1.2rem]'>{exp.title}</p>
                <h1 className='text-[1.2rem]  font-medium text-center'>{exp.time}</h1>
            </div>
        </div>
    )
}

export default ExperienceItem