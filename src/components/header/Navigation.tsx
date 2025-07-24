'use client'
import React from 'react';

const NavigationItem: React.FC<{ isActive: boolean; onClick: () => void; children: React.ReactNode }> = ({ isActive, onClick, children }) => {
    return (
        <a
            onClick={onClick}
            className={`text-lg text-center md:px-4 md:py-8 py-4 px-8 cursor-pointer border-b-2  ${isActive ? 'border-amber-600' : 'border-transparent'} 
            hover:border-amber-600 transition-all duration-500 hover:text-amber-600 font-semibold`}
        >
            {children}
        </a>
    );
}

const Navigation: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState<number>(0);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const handleItemClick = (index: number, href: string) => {
        setActiveItem(index);
        setIsOpen(false); // Close the menu on item click
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 89;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const items = [
        { label: 'About', href: '#about' },
        { label: 'Service', href: '#services' },
        { label: 'Portfolio', href: '#project' },
        { label: 'Skills', href: '#skill' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <header className='w-full fixed top-0 z-[99999] flex px-8 justify-between items-center border-b-[1px] border-white/15 bg-[#090909]/50 backdrop-blur-[5px]'>
            <div className='flex items-center px-2'>
                <div
                    className=' cursor-pointer text-2xl font-bold px-3 py-2 rounded-full bg-white text-black'
                    onClick={() => handleItemClick(0, '#home')}
                >W</div>
            </div>
            <nav className='hidden md:flex'>
                {items.map((item, index) => (
                    <NavigationItem
                        key={index}
                        isActive={activeItem === index}
                        onClick={() => handleItemClick(index, item.href)}
                    >
                        {item.label}
                    </NavigationItem>
                ))}
            </nav>
            <div className='py-4 md:hidden relative'>
                <div className='px-4 py-4 text-lg bg-gray-300/20' onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>
                {isOpen && (
                    <nav className='flex flex-col absolute top-20 -left-12 bg-neutral-700/80'>
                        {items.map((item, index) => (
                            <NavigationItem
                                key={index}
                                isActive={activeItem === index}
                                onClick={() => handleItemClick(index, item.href)}
                            >
                                {item.label}
                            </NavigationItem>
                        ))}
                    </nav>
                )}
            </div>
            <div className='md:flex hidden items-center px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </header>
    )
}

export default Navigation;