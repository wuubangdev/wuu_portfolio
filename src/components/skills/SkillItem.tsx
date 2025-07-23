import React from 'react'
import "./skill.css"
import Image from 'next/image';

export interface SkillItemProps {
    title: string;
    icon: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, title }) => {
    return (
        <div className="container group">
            <div className="glass w-full">
                <div className='w-full h-full relative my-4'>
                    <Image src={icon} alt='icon-skill' fill className='object-contain group-hover:scale-105 duration-300' />
                </div>
                <div className='px-4 py-2 font-medium group-hover:text-amber-700 text-amber-600 duration-300'>{title}</div>
            </div>
        </div>

    )
}

export default SkillItem
