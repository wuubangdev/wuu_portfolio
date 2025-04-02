import React from 'react'

interface HeaderSectionProps {
    title: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title }) => {
    return (
        <div className='relative border-2 border-amber-600 py-5 aspect-square cursor-default'>
            <div className='absolute top-1/2 -translate-y-1/2 translate-x-1/3 left-0 bg-[#090909] text-amber-600 text-lg font-medium hover:translate-x-1/4 duration-500'>
                {title}
            </div>
        </div>
    )
}

export default HeaderSection;