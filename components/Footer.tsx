'use client'

import footerGrid from '@/public/footer-grid.svg'
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoLogoGithub } from 'react-icons/io';


const Footer = () => {
    const [playGif, setPlayGif] = useState(false)
    const [showCheck, setShowCheck] = useState(false)

    const handleCopyButton = (e: React.FormEvent) => {
        setPlayGif(true)
        setShowCheck(true)

        navigator.clipboard.writeText('turkisalh97@gmail.com')

        setTimeout(() => {
            setPlayGif(false)
            setShowCheck(false)
        }, 2000)
    }
    return (
        <section className="w-full relative flex flex-col items-center justify-center h-80 bg-cover bg-center mt-20" style={{ backgroundImage: `url(${footerGrid.src})` }}>

            <div className='flex rel flex-col items-center gap-2 relative mb-20'>
                <p className='bg-gradient-to-r from-purple-600/90 to-purple-400 bg-clip-text text-transparent'>Reach out to me now.</p>

                {playGif && <img src='/confetti.gif' alt="gif" className='absolute inset-0 w-full h-full object-cover pointer-events-none' />}

                <button disabled={playGif} onClick={handleCopyButton} className='text-white relative overflow-hidden py-3 px-6 text-base bg-white/5 backdrop-filter hover:bg-white/20 border border-white/20 transition-all rounded-xl'>

                    {<span className={`flex gap-2 items-center transition-all px-6 duration-300 ${showCheck ? 'opacity-100 scale-100' : 'opacity-0 scale-0 translate-y-10 absolute'}`}>
                        <p>Copied!</p>
                        <FaCheck size={20} className='text-green-500' />
                    </span>}

                    {<span className={`flex gap-2 items-center transition-all duration-300 ${showCheck ? 'opacity-0 scale-0 translate-y-10 absolute' : 'opacity-100 scale-100'}`}>
                        <p>Copy My Email</p>
                        <MdEmail size={20} className='text-white/90' />
                    </span>}

                </button>
            </div>
            <div className='absolute px-4 text-white bg-[#0C0E23]/10 flex flex-row items-center justify-between backdrop-blur-sm w-full bottom-0 h-20'>
                <h4 className='text-base'>Copyright @2025 Turki</h4>

                <a href='https://github.com/Turki41' target='_blank' className='p-2 bg-[#0C0E23] border border-white rounded-lg ring-inset ring ring-white/30 hover:bg-gray-700 transition-colors'>
                    <IoLogoGithub className='text-base'/>
                </a>
            </div>
        </section>
    )
}

export default Footer