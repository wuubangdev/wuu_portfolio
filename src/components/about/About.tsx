import React from 'react'
import HeaderSection from '../utils/HeaderSection';
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <section id='about' className='w-full flex border-b-[1px] border-white/15 justify-center md:px-28 px-4'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 p-8 lg:py-32 lg:px-20 md:py-20 md:px-10 sm:py-10 sm:px-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 min-h-[100vh]'>
                    <div className='md:block hidden w-full'>
                        <div className='w-full sticky top-28 flex items-center justify-start'>
                            <div className='w-4/5 aspect-[4/5] mb-8 relative bg-amber-800'>
                                <Image
                                    alt='avatar'
                                    src={'https://wuubang-access.s3.ap-southeast-1.amazonaws.com/thum_port_wu.jpg'}
                                    fill
                                    className='object-cover'
                                    style={{
                                        filter: 'grayscale(80%)'
                                    }}
                                />
                                <div className='absolute -bottom-8 -right-12 px-8 py-10 flex flex-col gap-2 justify-center items-center bg-black rounded-2xl'>
                                    <div className='font-bold text-8xl cursor-default'>2+</div>
                                    <div className='text-[1rem] font-bold cursor-default'>Years Exprience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full flex items-center justify-start'>
                            <HeaderSection title='About me' />
                        </div>
                        <h1 className='md:text-[4rem] text-[3rem] font-medium leading-none'>I Am Bang, Fullstack Developer</h1>
                        <h5 className='md:text-3xl text-2xl font-semibold text-[#a9a9a9]'>With 2 years of hands-on experience in building modern web applications using technologies like Next.js, React, NestJS, and Java Spring, I focus on creating clean, responsive, and scalable solutions tailored to real-world needs.</h5>
                        <p className='text-xl font-extralight text-[#919195]'>I find joy in the craft of coding — from thoughtful UI interactions to robust backend systems. Every project is a chance for me to grow, collaborate, and deliver meaningful digital experiences.
                            Let&apos;s build something impactful together. </p>
                        <div className='md:pt-8 grid grid-cols-1 md:gap-10 gap-5'>
                            <div className='flex flex-col gap-1 cursor-pointer'>
                                <div className='text-3xl md:text-5xl text-amber-600 font-medium'>HCM, VN</div>
                                <div className='text-[1rem] text-[#919195]'>Address</div>
                            </div>
                            <div className='flex flex-col gap-1 cursor-pointer'>
                                <div className='text-3xl md:text-5xl text-amber-600 font-medium'>Can Tho University</div>
                                <div className='text-[1rem] text-[#919195]'>Education</div>
                            </div>
                            <div className='flex flex-col gap-1 cursor-pointer'>
                                <div className='text-3xl md:text-5xl text-amber-600 font-medium'>Master</div>
                                <div className='text-[1rem] text-[#919195]'>Degree</div>
                            </div>
                            <div className='flex flex-col gap-1 cursor-pointer'>
                                <div className='text-3xl md:text-5xl text-amber-600 font-medium'>3.6</div>
                                <div className='text-[1rem] text-[#919195]'>GPA</div>
                            </div>

                            {/* <div className='flex flex-col gap-1 cursor-pointer'>
                                <div className='text-3xl md:text-5xl text-amber-600 font-medium'>500+</div>
                                <div className='text-[1rem] text-[#919195]'>Projects Completed</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;