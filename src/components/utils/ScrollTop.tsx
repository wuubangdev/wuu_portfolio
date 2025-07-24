"use client"
import React from 'react'

const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div
            className='fixed bottom-8 right-8 rounded-full bg-gray-800/50 p-3 cursor-pointer hover:bg-amber-600 duration-500'
            onClick={scrollToTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
            </svg>

        </div>
    )
}

export default ScrollTop;