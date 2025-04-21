import React from 'react'
import HeaderSection from '../utils/HeaderSection'
import ExperiemceItem from './ExperiemceItem'
import { IExperience } from '@/types'

const experiencesData: IExperience[] = [
    {
        id: 1,
        company: "Thingtodo Agency",
        title: "Web Developer",
        imageUrl: "/experience/thingtodooutdoor-logo.png",
        time: "Oct. 2024 - Now",
    },
    {
        id: 2,
        company: "Freelance & Upwork",
        title: "Freelancer Web Developer",
        imageUrl: "/experience/free.png",
        time: "May. 2024 - Oct. 2024",
    },
    {
        id: 3,
        company: "PT Company",
        title: "Mapping Developer",
        imageUrl: "/experience/phucthanh.png",
        time: "Jan. 2023 - May. 2024",
    },
    {
        id: 4,
        company: "LRD - CTU",
        title: "Researcher & Developer",
        imageUrl: "/experience/ctu.png",
        time: "Oct. 2021 - Jan. 2023",
    },
]

const Experience = () => {
    return (
        <section className='w-full flex border-b-[1px] border-white/15 justify-center px-28 relative'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 lg:py-28 lg:px-20 md:py-20 md:px-10 sm:py-10 sm:px-5'>
                <div className='w-full flex items-center justify-center'>
                    <HeaderSection title='Experience' />
                </div>
                <h1 className='text-center text-[4rem] font-medium leading-none'>Experience</h1>
                <div className='pt-10 grid grid-cols-1 md:grid-cols-4 gap-2'>
                    {experiencesData && experiencesData.map((exp, i) => <ExperiemceItem key={`experience-${exp.id}`} exp={{ ...exp, id: i }} />)}
                </div>
            </div>
        </section>
    )
}

export default Experience