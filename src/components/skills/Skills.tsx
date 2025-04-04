import React from 'react'
import HeaderSection from '../utils/HeaderSection';
import SkillItem from './SkillItem';

const Skills: React.FC = () => {
    return (
        <section className='w-full flex border-b-[1px] border-white/15 justify-center px-28 relative'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 lg:py-28 lg:px-20 md:py-20 md:px-10 sm:py-10 sm:px-5'>
                <div className='w-full flex items-center justify-center'>
                    <HeaderSection title='My Skills' />
                </div>
                <h1 className='text-center text-[4rem] font-medium leading-none'>Main Skills</h1>
                <div className='pt-10 grid grid-cols-4 gap-6'>
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                </div>
            </div>
        </section>
    )
}

export default Skills;