'use client'
import React from 'react';

const NavigationItem: React.FC<{ isActive: boolean; onClick: () => void; children: React.ReactNode }> = ({ isActive, onClick, children }) => {
    return (
        <a
            onClick={onClick}
            className={`text-lg text-center px-4 py-8 cursor-pointer  border-b-2  ${isActive ? 'border-amber-600' : 'border-transparent'} 
            hover:border-amber-600 transition-all duration-500 hover:text-amber-600 font-semibold`}
        >
            {children}
        </a>
    );
}

const Navigation: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState<number>(0);
    const handleItemClick = (index: number) => {
        setActiveItem(index);
    };

    const items = [
        { label: 'Home', href: '' },
        { label: 'About', href: '' },
        { label: 'Service', href: '' },
        { label: 'Portfolio', href: '' },
        { label: 'Blog', href: '' },
        { label: 'Contact', href: '' }
    ];

    return (
        <header className='w-full fixed top-0 z-[99999] flex px-8 justify-between items-center border-b-[1px] border-white/15 bg-[#090909]/50 backdrop-blur-[5px]'>
            <div className='flex items-center px-2'>
                <div className='text-2xl font-bold px-3 py-2 rounded-full bg-white text-black' >W</div>
            </div>
            <nav className='flex'>
                {items.map((item, index) => (
                    <NavigationItem
                        key={index}
                        isActive={activeItem === index}
                        onClick={() => handleItemClick(index)}
                    >
                        {item.label}
                    </NavigationItem>
                ))}
            </nav>
            <div className='flex items-center px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </header>
    )
}

export default Navigation;