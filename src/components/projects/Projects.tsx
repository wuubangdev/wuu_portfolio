'use client'
import React from 'react'
import HeaderSection from '../utils/HeaderSection';
import { IProjectDetail, Project } from '@/types';
import ProjectItem from './ProjectItem';


interface ProjectProps {
    projects?: Project[];
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Thing to do home page",
        description: "Full Stack Web Developer",
        imageUrl: "/project/thingtodo.png",
        linkGit: "",
        detail: {
            title: "Thing to do home page",
            description: "A simple home page for a to-do list application, showcasing a clean and user-friendly interface.",
            imageUrl: ["https://wuubang-access.s3.ap-southeast-1.amazonaws.com/ttd.mp4"],
            linkLive: "https://thingtodo.vn/",
            category: "Website",
            technologies: ["Java", "TypeScript"],
            libraries: {
                frontend: ["React", "Nextjs", "Tailwind CSS", "Antdesign", "Framer Motion"],
                backend: ["Spring 3.0", "MySQL", "TypeORM", "Restful API"],
                other: ["AWS S3", "Nginx", "Docker", "GitHub Actions"]
            }
        },
    },
    {
        id: 2,
        title: "Icream project landing page",
        description: "Frontend Web Developer",
        imageUrl: "/project/kem.png",
        linkGit: "",
        detail: {
            title: "Icream project landing page",
            description: "A simple home page for a to-do list application, showcasing a clean and user-friendly interface.",
            imageUrl: ["https://wuubang-access.s3.ap-southeast-1.amazonaws.com/icrem.mp4"],
            linkLive: "https://kemcalem.thingtodo.vn/",
            category: "Website",
            technologies: ["TypeScript"],
            libraries: {
                frontend: ["Nextjs", "Tailwind CSS", "Slick Carousel"],
                backend: ["No backend"],
                other: ["AWS S3", "Nginx"]
            }
        },
    },
    {
        id: 3,
        title: "Luxury beauty spa",
        description: "Full Stack Web Developer",
        imageUrl: "/project/diemmy.png",
        linkGit: "",
        detail: {
            title: "Luxury beauty spa",
            description: "A simple home page for a to-do list application, showcasing a clean and user-friendly interface.",
            imageUrl: ["https://wuubang-access.s3.ap-southeast-1.amazonaws.com/diemmy.mp4"],
            linkLive: "https://diemmy.bangdev.click/",
            category: "Website",
            technologies: ["React", "Tailwind CSS", "TypeScript"],
            libraries: {
                frontend: ["Nextjs", "React", "Tailwind CSS", "antdesign", "Slick Carousel"],
                backend: ["Spring 3.0", "MySQL", "TypeORM", "Restful API"],
                other: ["Axios", "Nginx", "Docker", "GitHub Actions", "AWS S3"]
            }
        },
    },
    {
        id: 4,
        title: "Conference website",
        description: "Full Stack Web Developer",
        imageUrl: "/project/lrd.png",
        linkGit: "",
        detail: {
            title: "Conference website",
            description: "A simple home page for a to-do list application, showcasing a clean and user-friendly interface.",
            imageUrl: ["https://wuubang-access.s3.ap-southeast-1.amazonaws.com/lrd.mp4"],
            linkLive: "https://lrd-conf.bangdev.click/",
            category: "Website",
            technologies: ["Java", "TypeScript"],
            libraries: {
                frontend: ["Nextjs", "Tailwind CSS"],
                backend: ["Nestjs", "MongoDB", "Restful API"],
                other: ["Axios", "Nginx", "Docker", "GitHub Actions", "AWS S3"]
            }
        },
    },
    {
        id: 5,
        title: "Portfolio website",
        description: "Full Stack Web Developer",
        imageUrl: "/project/paulthien.png",
        linkGit: "",
        detail: {
            title: "Portfolio website",
            description: "A simple home page for a to-do list application, showcasing a clean and user-friendly interface.",
            imageUrl: ["https://wuubang-access.s3.ap-southeast-1.amazonaws.com/paul.mp4"],
            linkLive: "https://www.paulthien97.com/",
            category: "Website",
            technologies: ["TypeScript"],
            libraries: {
                frontend: ["React", "Tailwind CSS"],
                backend: ["Nestjs", "MySQL", "Restful API"],
                other: ["Axios", "Nginx", "Docker", "GitHub Actions", "AWS S3"]
            }
        },
    },
    {
        id: 6,
        title: "3D viewer page",
        description: "Frontend Web Developer",
        imageUrl: "/project/3d.png",
        linkGit: "",
        detail: {
            title: "3D viewer page",
            description: "A simple home page for a to-do list application, showcasing a clean and user-friendly interface.",
            imageUrl: ["https://wuubang-access.s3.ap-southeast-1.amazonaws.com/3d.mp4"],
            linkLive: "https://ttd-3-d-viewer.vercel.app/",
            category: "Website",
            technologies: ["React"],
            libraries: {
                frontend: ["React", "Tailwind CSS", "Three.js"],
                backend: ["No backend"],
                other: ["Nginx",]
            }
        },
    },
]

const Projects: React.FC<ProjectProps> = ({ }) => {
    const [showDetail, setShowDetail] = React.useState<boolean>(false);
    const [detail, setDetail] = React.useState<IProjectDetail | null>(null);
    const openDetailHandle = (project: Project) => {
        setShowDetail(true);
        setDetail(project.detail || null);
    }
    return (
        <section id='project' className='w-full flex border-b-[1px] border-white/15 justify-center px-4 md:px-28 relative'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 lg:py-28 lg:px-20 md:py-20 md:px-10 py-10 sm:px-5'>
                <div className='w-full flex items-center justify-center'>
                    <HeaderSection title='Projects' />
                </div>
                <h1 className='text-center text-[2.5rem] md:text-[4rem] font-medium leading-none cursor-default'>My Latest Project</h1>
                <div className='pt-10 grid md:grid-cols-3 grid-cols-1 gap-6 items-stretch' >
                    {projectsData && projectsData.map((project) => <div className='cursor-pointer md:px-0 px-3' key={`project-${project.id}`} onClick={() => openDetailHandle(project)}>
                        <ProjectItem project={project} />
                    </div>)}
                </div>
            </div>
            {showDetail && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-99999'>
                    <div className="mx-auto md:w-4/5 w-9/10 md:p-6 px-3 py-6 bg-gray-900 shadow-lg relative">
                        <div className='flex items-end gap-3 mb-4'>
                            <h1 className="md:text-2xl font-bold text-white uppercase">{detail?.title}</h1>
                            <p className="text-sm hidden md:block text-amber-700 font-medium italic bg-amber-100 px-2 rounded-lg">{detail?.category}</p>
                        </div>
                        <a
                            href={detail?.linkLive}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            🔗 Visit Live Site
                        </a>
                        <div className='flex items-center justify-center mt-4 w-full'>
                            <div className="aspect-video md:w-3/4 w-full overflow-hidden">
                                <video
                                    controls
                                    width="100%"
                                    preload="metadata"
                                >
                                    <source src={detail?.imageUrl[0]} type="video/mp4" />
                                </video>

                            </div>
                        </div>
                        {/* <p className="text-gray-700">{detail?.description}</p> */}

                        <div className="space-y-2 flex md:flex-row flex-col justify-between">
                            <div className='flex gap-2'>
                                <strong className="block font-semibold text-amber-600">Frontend:</strong>
                                <p className=''>{detail?.libraries.frontend.join(', ')}</p>
                            </div>
                            <div className='flex gap-2'>
                                <strong className="block font-semibold text-amber-600">Backend:</strong>
                                <p className=''>{detail?.libraries.backend.join(', ')}</p>
                            </div>
                            {detail?.libraries.other && (
                                <div className='flex gap-2'>
                                    <strong className="block font-semibold text-amber-600">Other Tools:</strong>
                                    <p className=''>{detail?.libraries.other.join(', ')}</p>
                                </div>
                            )}
                            <button
                                className='py-2 px-4 bg-gray-500 text-white hover:bg-gray-700 absolute top-4 right-4 transition duration-300 cursor-pointer'
                                onClick={() => setShowDetail(false)}
                            >
                                X
                            </button>
                        </div>
                        {/* Close modal */}

                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects;