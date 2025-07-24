import React from 'react'
import FormContact from './FormContact';

const Contact: React.FC = () => {
    return (
        <section className='w-full flex justify-center px-4 md:px-28 relative'>
            <div className='w-full flex flex-col border-x-[1px] border-white/15 lg:py-28 lg:px-20 md:py-20 md:px-10'>
                <div className='w-full flex-1 flex flex-col gap-5 bg-[#101010] lg:py-20 lg:px-20 md:py-10 md:px-16 sm:py-5 px-8  py-10'>
                    <h1 className='text-center text-[3rem] md:text-[4rem] leading-none cursor-default'>Send Me A Message</h1>
                    <p className='text-[#919195] text-[1rem] text-center cursor-default'>Your email address will not be published. All fields are required</p>
                    <div className='pt-10'>
                        <FormContact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;