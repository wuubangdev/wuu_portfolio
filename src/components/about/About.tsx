import React from 'react'
import HeaderSection from '../utils/HeaderSection';
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <section className='w-full flex border-b-[1px] border-white/15 justify-center px-28'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 lg:py-32 lg:px-20 md:py-20 md:px-10 sm:py-10 sm:px-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 min-h-[100vh]'>
                    <div className='w-full'>
                        <div className='w-full sticky top-28 flex items-center justify-start'>
                            <div className='w-4/5 aspect-[4/5] mb-8 relative bg-amber-800'>
                                <Image
                                    alt='avatar'
                                    src={'/avatar.jpg'}
                                    fill
                                    className='object-cover'
                                    style={{
                                        filter: 'grayscale(80%)'
                                    }}
                                />
                                <div className='absolute -bottom-8 -right-12 px-8 py-10 flex flex-col gap-2 justify-center items-center bg-black rounded-2xl'>
                                    <div className='font-bold text-8xl'>2+</div>
                                    <div className='text-[1rem] font-bold'>Years Exprience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full flex items-center justify-start'>
                            <HeaderSection title='About me' />
                        </div>
                        <h1 className='text-[4rem] font-medium leading-none'>I Am Bang, Fullstack Developer</h1>
                        <h5 className='text-3xl font-semibold text-[#a9a9a9]'>I have 8+ years of experiences in Software Development for give you better services.</h5>
                        <p className='text-xl font-extralight text-[#919195]'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite </p>
                        <div className='pt-8 grid grid-cols-2 gap-10'>
                            <div className='col-span-2 flex flex-col gap-2 cursor-pointer'>
                                <div className='text-5xl text-amber-600 font-medium'>Can Tho University</div>
                                <div className='text-[1rem] text-[#919195]'>Education</div>
                            </div>
                            <div className='flex flex-col gap-2 cursor-pointer'>
                                <div className='text-5xl text-amber-600 font-medium'>Master</div>
                                <div className='text-[1rem] text-[#919195]'>Degree</div>
                            </div>
                            <div className='flex flex-col gap-2 cursor-pointer'>
                                <div className='text-5xl text-amber-600 font-medium'>3.6</div>
                                <div className='text-[1rem] text-[#919195]'>GPA</div>
                            </div>

                            <div className='flex flex-col gap-2 cursor-pointer'>
                                <div className='text-5xl text-amber-600 font-medium'>500+</div>
                                <div className='text-[1rem] text-[#919195]'>Projects Completed</div>
                            </div>
                            <div className='flex flex-col gap-2 cursor-pointer'>
                                <div className='text-5xl text-amber-600 font-medium'>HCM, VN</div>
                                <div className='text-[1rem] text-[#919195]'>Address</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;