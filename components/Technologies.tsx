'use client'

import { techStack } from "@/data"
import { GridItem } from "@/types"
import grid from '../public/grid.svg'
import { motion, useInView } from 'motion/react'
import { useRef } from "react"
import useMouseTracker from "@/hooks/useMouseTracker"

const Technologies = () => {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '200px' })

    const { handleMouseMove, handleMouseLeave } = useMouseTracker()

    return (
        <section id="technologies" className="min-h-screen flex items-center justify-center mt-32">

            <div className="">

                <div className="w-full flex flex-col items-center justify-center text-center">
                    <motion.h2 initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0, duration: 0.3 }} className="text-3xl font-bold text-blue-100 mb-6">Technologies I Work With</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.3 }} className="text-gray-500 mb-10 max-w-2xl">Here are some of the key technologies and tools I utilize in my projects.</motion.p>
                </div>

                <div className={'max-w-7xl gap-2 max-h-screen grid md:grid-cols-4 md:grid-rows-5 lg:grid-cols-4 lg:grid-rows-4'}>
                    {techStack.map((tech: GridItem) => (
                        <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={cardRef} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: tech.id / 5, duration: 0.3 }} key={tech.id} className={`card bg-slate-900/10 flex flex-col overflow-hidden items-center rounded-xl border p-6 relative group ${tech.id === 1 && 'col-span-2 row-span-2'} ${(tech.id === 4 || tech.id === 5) && 'col-span-2'}`}>
                            
                            <div className={`flex w-full h-full z-10 ${tech.id === 1 ? 'justify-between' : ''} ${(tech.id === 4 || tech.id === 5) ? 'flex-row gap-5' : 'flex-col'} items-center gap-2`}>
                                <div className={` w-full flex-1 flex  ${(tech.id === 11 || tech.id === 1 || tech.id === 4 || tech.id === 5) ? 'text-blue-500' : 'text-white'} ${(tech.id === 1 || tech.id === 4 || tech.id === 5) ? '' : 'justify-center'}`}>
                                    <tech.icon size='25' />
                                </div>

                                <div className={`flex flex-col w-full truncate line-clamp-1 justify-center group-hover:translate-x-1 transition-all ${tech.id !== 4 && tech.id !== 5 && tech.id !== 1 ? 'items-center text-center' : ''}`}>
                                    <h3 className="text-xl text-blue-100 font-semibold mb-2">{tech.title}</h3>
                                    <p className="text-start text-gray-500 text-sm">{tech.description}</p>
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Technologies