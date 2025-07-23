import React from 'react'
import HeaderSection from '../utils/HeaderSection';
import SkillItem, { SkillItemProps } from './SkillItem';

const baseSkills: SkillItemProps[] = [
    { icon: '/skill/java.png', title: 'Java' },
    { icon: '/skill/javascript.png', title: 'JavaScript' },
    { icon: '/skill/ts.png', title: 'TypeScript' },
    { icon: '/skill/html-css.png', title: 'HTML/CSS' },

]
const frontskills: SkillItemProps[] = [
    { icon: '/skill/react.png', title: 'ReactJS' },
    { icon: '/skill/nextjs.png', title: 'NextJS' },
    { icon: '/skill/tailwind.png', title: 'TailWind CSS' },
    { icon: '/skill/antd.png', title: 'Antd' },
]
const backskills: SkillItemProps[] = [
    { icon: '/skill/springboot.png', title: 'Java Spring' },
    { icon: '/skill/nestjs.png', title: 'NestJS' },
    { icon: '/skill/rest.png', title: 'RESTful API' },
    { icon: '/skill/database.png', title: 'Databases' },
]
const toolskills: SkillItemProps[] = [
    { icon: '/skill/github.png', title: 'Github' },
    { icon: '/skill/aws.png', title: 'AWS (EC2. S3,...)' },
    { icon: '/skill/postmam.png', title: 'Postman' },
    { icon: '/skill/docker.png', title: 'Docker' },
]
const Skills: React.FC = () => {
    return (
        <section className='w-full flex border-b-[1px] border-white/15 justify-center px-28 relative'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 lg:py-28 lg:px-20 md:py-20 md:px-10 sm:py-10 sm:px-5'>
                <div className='w-full flex items-center justify-center'>
                    <HeaderSection title='My Skills' />
                </div>
                <h1 className='text-center text-[4rem] font-medium leading-none cursor-default'>Main Skills</h1>
                {/* Base */}
                <h1 className='pt-4 text-amber-600 text-[2rem] font-medium leading-none cursor-default'>Base Skills</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {baseSkills.map((skill, index) => (
                        <SkillItem key={index} icon={skill.icon} title={skill.title} />
                    ))}
                </div>
                {/* Front end */}
                <h1 className='pt-4 text-amber-600 text-[2rem] font-medium leading-none cursor-default'>Frontend Skills</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {frontskills.map((skill, index) => (
                        <SkillItem key={index} icon={skill.icon} title={skill.title} />
                    ))}
                </div>
                <h1 className='pt-4 text-amber-600 text-[2rem] font-medium leading-none cursor-default'>Backend Skills</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {backskills.map((skill, index) => (
                        <SkillItem key={index} icon={skill.icon} title={skill.title} />
                    ))}
                </div>
                <h1 className='pt-4 text-amber-600 text-[2rem] font-medium leading-none cursor-default'>Other / Tools</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {toolskills.map((skill, index) => (
                        <SkillItem key={index} icon={skill.icon} title={skill.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;