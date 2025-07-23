import { IService } from '@/types'
import React from 'react'
import HeaderSection from '../utils/HeaderSection';
import ServiceIteam from './ServiceIteam';

interface ServicesProps {
    services?: IService[];
}

const servicesData: IService[] = [
    {
        id: 1,
        title: "Backend Developer",
        description: "Transform complex logic into smooth operations. I build the foundation, manage data, and power everything behind the scenes.",
        imageUrl: "/services/backend.png",
        linkGit: "",
    },
    {
        id: 2,
        title: "Frontend Developer",
        description: "Bring ideas to life through clean and intuitive interfaces. I shape what users see, touch, and interact with—pixel by pixel.",
        imageUrl: "/services/frontend.png",
        linkGit: "",
    },
    {
        id: 3,
        title: "GIS Developer",
        description: "Turn maps into powerful tools. I work with spatial data, build location-based systems, and visualize geography with precision.",
        imageUrl: "/services/gis.png",
        linkGit: "",
    },
]

const Services: React.FC<ServicesProps> = ({ services }) => {
    return (
        <section className='w-full flex border-b-[1px] border-white/15 justify-center px-28 relative'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 lg:py-28 lg:px-20 md:py-20 md:px-10 sm:py-10 sm:px-5'>
                <div className='w-full flex items-center justify-center'>
                    <HeaderSection title='Services' />
                </div>
                <h1 className='text-center text-[4rem] font-medium leading-none cursor-default'>My best services</h1>
                <div className='pt-10 grid grid-cols-3'>
                    {servicesData && servicesData.map((service, i) => <ServiceIteam key={`service-${service.id}`} service={{ ...service, id: i }} />)}
                </div>
            </div>
        </section>
    )
}

export default Services;