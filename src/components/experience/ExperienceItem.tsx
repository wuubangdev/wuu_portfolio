import { IExperience } from '@/types';
import React from 'react'

interface IExperienceItemProps {
    experience?: IExperience;
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ experience }) => {
    return (
        <div className='w-full flex gap-8 items-center border-[1px] border-amber-600/60 px-8 py-3'>
            <div className='w-24 aspect-square bg-gray-300 '></div>
            <div className='flex-1 flex justify-between'>
                <div className='flex flex-col gap-3 border-l-[1px] border-amber-600/50 px-8'>
                    <h1 className='text-xl font-semibold hover:text-amber-600'>Thingtodo Agency</h1>
                    <h3 className='text-[#a9a9a9]'>Oct, 2024 - Apr, 2025</h3>
                    <h5 className='text-[#919195]'>Fullstack developer</h5>
                </div>
                <div className='flex justify-end text-8xl font-bold opacity-15'>01</div>
            </div>
        </div>
    )
}

export default ExperienceItem;
