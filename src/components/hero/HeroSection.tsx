import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section id='home' className='w-full border-b-[1px] border-white/15 min-h-screen flex justify-center md:px-28 px-4 pt-22 relative'>
            <div className='w-full flex-1 flex flex-col items-center border-x-[1px] border-white/15 relative'>
                {/* Hero text */}
                <div className='sticky md:top-10 top-16 py-10 xl:text-[12rem] lg:text-[10rem] md:text-8xl text-6xl leading-none font-bold text-white opacity-[5%]'>DEVELOPER</div>
                {/* Main content */}
                <div className='absolute inset-0 py-16 grid md:grid-cols-5 grid-cols-1 gap-4 md:px-20 px-6 pt-10'>
                    <div className='col-span-2 md:pl-10 md:pr-20 md:hidden flex flex-col items-center justify-center gap-4'>
                        <div className='relative w-2/3 md:w-full aspect-square'>
                            <Image
                                alt='avatar'
                                src={'/avatar-hero.jpg'}
                                fill
                                className='object-cover'
                                style={{
                                    // filter: 'grayscale(100%)'
                                }}
                            />
                        </div>
                    </div>
                    <div className='xl:col-span-3 md:col-span-2 flex flex-col justify-center md:items-start items-center gap-10 md:px-20 pt-5'>
                        <h1 className='xl:text-8xl lg:text-6xl text-6xl text-center md:text-start font-bold cursor-default'>Fullstack Web & GIS Developer</h1>
                        <div className='flex items-center gap-4 mt-4 text-white/40 cursor-default'>
                            <span className='text-2xl'>BANG LE</span>
                            <div className='w-24 border-[0.5px] border-white/40'></div>
                        </div>
                        <Link href='mailto:levubang97@gmail.com'>
                            <button className='py-4 px-11 bg-gray-600 cursor-pointer hover:bg-amber-600 duration-500 text-lg font-medium'>Contact me</button>
                        </Link>
                    </div>
                    <div className='lg:col-span-2 md:col-span-3 md:pl-5 hidden md:flex flex-col items-center justify-center gap-4'>
                        <div className='relative 2xl:w-2/3 w-full aspect-[3/4]'>
                            <Image
                                alt='avatar'
                                src={'/avatar-hero.jpg'}
                                fill
                                className='object-cover'
                                style={{
                                    // filter: 'grayscale(100%)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Social button */}
            <div className='absolute top-[70%] left-10 px-6 '>
                <ul className='hidden md:flex items-center gap-4 -rotate-90 origin-left font-medium text-white'>
                    <li className='hover:text-amber-600 duration-500'>
                        <Link href="https://www.facebook.com/WuBangLee/?locale=vi_VN" target='_blank'>Facebook</Link>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-amber-600 scale-x-150">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <li className='hover:text-amber-600 duration-500'>
                        <Link href="https://www.linkedin.com/in/bang-le-6a9088193/" target='_blank'>LinkedIn</Link>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-amber-600 scale-x-150">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <li className='hover:text-amber-600 duration-500'>
                        <Link href="https://github.com/wuubangdev" target='_blank'>Github</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HeroSection