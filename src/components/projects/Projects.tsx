'use client'
import React, { useEffect } from 'react'
import HeaderSection from '../utils/HeaderSection';
import { Project } from '@/types';
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
    },
    {
        id: 2,
        title: "Icream project landing page",
        description: "Frontend Web Developer",
        imageUrl: "/project/kem.png",
        linkGit: "",
    },
    {
        id: 3,
        title: "Luxury beauty spa",
        description: "Full Stack Web Developer",
        imageUrl: "/project/diemmy.png",
        linkGit: "",
    },
    {
        id: 4,
        title: "Conference website",
        description: "Full Stack Web Developer",
        imageUrl: "/project/lrd.png",
        linkGit: "",
    },
    {
        id: 5,
        title: "Portfolio website",
        description: "Full Stack Web Developer",
        imageUrl: "/project/paulthien.png",
        linkGit: "",
    },
    {
        id: 6,
        title: "3D viewer page",
        description: "Frontend Web Developer",
        imageUrl: "/project/3d.png",
        linkGit: "",
    },
]

const Projects: React.FC<ProjectProps> = ({ }) => {

    const [projects, setProjects] = React.useState<Project[]>([]);
    const [showMore, setShowMore] = React.useState(false);

    useEffect(() => {
        if (showMore) {
            setProjects(projectsData);
        }
        else {
            const result: Project[] = [];
            projectsData.forEach((project, i) => {
                if (i < 3) {
                    result.push(project);
                }
            });
            setProjects(result);
        }
    }, [showMore]);

    return (
        <section className='w-full flex border-b-[1px] border-white/15 justify-center px-28 relative'>
            <div className='w-full flex flex-col gap-6 border-x-[1px] border-white/15 lg:py-28 lg:px-20 md:py-20 md:px-10 sm:py-10 sm:px-5'>
                <div className='w-full flex items-center justify-center'>
                    <HeaderSection title='Projects' />
                </div>
                <h1 className='text-center text-[4rem] font-medium leading-none cursor-default'>My Latest Project</h1>
                <div className='pt-10 grid grid-cols-3 gap-6'>
                    {projects && projects.map((project) => <ProjectItem key={`project-${project.id}`} project={project} />)}
                </div>
                {!showMore &&
                    <div className='p-2 flex items-center justify-center'>
                        <button
                            className='py-4 px-11 bg-gray-600 cursor-pointer hover:bg-amber-600 duration-500 text-lg font-medium'
                            onClick={() => setShowMore(!showMore)}
                        >
                            View All Project
                        </button>
                    </div>}
            </div>
        </section>
    )
}

export default Projects;