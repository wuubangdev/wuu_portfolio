import { Project } from '@/types'
import Image from 'next/image';
import React from 'react'

interface ProjectItemProps {
    project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className='w-full border-[1px] border-white/15 flex flex-col group'>
            <div className='relative w-full aspect-square overflow-hidden'>
                <Image
                    alt='project image'
                    src={project.imageUrl}
                    fill
                    className='object-cover group-hover:scale-110 transition-all duration-500 ease-in-out'
                />
            </div>
            <div className='py-8 px-11 flex flex-col gap-3'>
                <p className='text-[1rem] leading-none uppercase text-[#919195]'>{project.description}</p>
                <h1 className='text-2xl font-medium leading-none hover:text-amber-600 duration-500 cursor-pointer'>{project.title}</h1>
            </div>
        </div>
    )
}

export default ProjectItem