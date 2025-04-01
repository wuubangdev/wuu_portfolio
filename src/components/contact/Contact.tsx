import React from 'react'
import FormContact from './FormContact';

const Contact: React.FC = () => {
    return (
        <section className='w-full h-screen flex justify-center px-28 relative'>
            <div className='w-full flex flex-col border-x-[1px] border-white/15 py-28 px-20'>
                <div className='w-full flex-1 flex flex-col gap-5 bg-[#101010] py-20 px-32'>
                    <h1 className='text-center text-[4rem] leading-none'>Send Me A Message</h1>
                    <p className='text-[#919195] text-[1rem] text-center'>Your email address will not be published. All fields are required</p>
                    <div className='pt-10'>
                        <FormContact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;