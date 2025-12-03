'use client'

import { projects } from "@/data"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { FaLocationArrow } from "react-icons/fa"
import bg from '../public/bg.png'
import useMouseTracker from "@/hooks/useMouseTracker"

const Projects = () => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-200px' })

    const { handleMouseMove, handleMouseLeave } = useMouseTracker()

    return (
        <section id="projects" className="min-h-screen py-20 max-sm:mt-60 mt-10">

            <div className="w-full flex flex-col items-center justify-center text-center">
                <motion.h2 initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0, duration: 0.3 }} className="text-3xl font-bold text-blue-100 mb-6">Projects I Made</motion.h2>
                <motion.p initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.3 }} className="text-gray-500 mb-10 max-w-2xl">Here are some of the projects i worked on</motion.p>
            </div>

            <div ref={ref} className="w-full h-full flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-24 mt-10">
                {projects.map((project, index) => (
                    <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index / 4, duration: 0.3 }} key={project.id} className="flex flex-col group relative card items-center max-sm:space-y-14 sm:justify-between rounded-2xl p-5 border w-[500px] min-h-[518px] bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
                        <div className="relative rounded-xl overflow-hidden md:h-64 z-10" >
                            <div className="">
                                <img src={project.img} alt={project.title} className="rounded-xl object-center object-cover z-50" />
                            </div>
                        </div>

                        <div className="w-full flex-col h-[187px] flex justify-between max-sm:space-y-10">
                            <div className="group-hover:translate-x-1 transition-all overflow-hidden">
                                <h1 className="text-blue-100 text-wrap">{project.title}</h1>
                                <p className="text-gray-300/80 text-base line-clamp-3">{project.des}</p>
                            </div>

                            <div className="flex items-center justify-between md:pt-10">
                                <div className="flex">
                                    {project.iconLists.map((item, index) => (
                                        <img key={index} src={item} alt={item} className="p-2 border border-white/20 rounded-full bg-black-100 transition-transform duration-300 [transform:translateX(var(--shift))] group-hover:[transform:translateX(0px)]" style={{ ["--shift" as any]: `-${index * 12}px` }} />))}
                                </div>

                                <div className="text-purple-400 hover:text-purple-300 transition-colors">
                                    <a target="_blank" href={project.link} className="flex gap-3 items-center">
                                        <p className="hidden sm:block text-xl">View Live Site</p>
                                        <FaLocationArrow className="max-sm:ml-12 md:mt-1.5 md:mr-2 size-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects