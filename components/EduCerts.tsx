'use client'

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { RiGraduationCapFill } from "react-icons/ri"
import { PiMedalBold } from "react-icons/pi";


const EduCerts = () => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-200px' })

    return (
        <section id="education" ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center max-sm:mx-5">

            <div className="w-full items-center flex flex-col">
                <h1 className="text-blue-100 text-xl border-b border-gray-800 w-full pb-1">Education</h1>
                <Card title='Bachelor in Computer Science' sub="Taibah University" date="Expected Graduation: June 2026" type="Deg" />
            </div>

            <div className="w-full mt-10 flex flex-col">
                <h1 className="text-blue-100 text-xl border-b border-gray-800 w-full pb-1">Certificates & Training</h1>
                <Card title='AWS Cloud Practitioner' sub="Amazon" type="Cert" />
                <Card title='Security+' sub="CompTIA " type="Cert" />
                <Card title='Artificial Intelligence' sub="MISK x SAMSUNG" type="Cert" />
            </div>

        </section>
    )
}

const Card = ({ title, sub, date, type }: { title: string, sub: string, date?: string, type: 'Deg' | 'Cert' }) => {
    return (
        <div className="relative w-full h-full my-1">
            <div className={`${type === 'Cert' ? 'h-[90%] top-10' :'h-[60%]'} w-0.5 absolute left-0.5 bottom-0 bg-gray-800/80 rounded-full`} />
            <div className="absolute max-sm:-left-[16px] -left-[16.5px] top-1.5 rounded-full px-2 py-3">
                {type === 'Deg' && <RiGraduationCapFill className="text-purple-950 bg-transparent" />}
                {type === 'Cert' && <PiMedalBold className="text-purple-950" />}
            </div>

            <div className="w-full pl-3 mt-6 mx-5">
                <h1 className="text-blue-100 text-lg">{title}</h1>
                <p className="text-gray-500 text-lg">{sub}</p>
                <p className="text-gray-700 text-base">{date}</p>
            </div>
        </div>
    )
}

export default EduCerts