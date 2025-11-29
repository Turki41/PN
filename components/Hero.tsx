'use client'

import { Spotlight } from './ui/spotlight-new'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { IoIosSend } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getHero } from '@/features/dataFetchers/dataFetchers'
import LoaderSkeleton from './LoaderSkeleton'

const Hero = () => {
    const { hero, isFetching } = useAppSelector((state) => state.dataFetchers)
    const dispatch = useAppDispatch()

    const [description, setDescription] = useState('')

    useEffect(() => {
        const fetchHero = async () => {
            try {
                await dispatch(getHero()).unwrap()

            } catch (error) {
                console.log('Error fetching hero data in Hero component:', error)
            }
        }

        fetchHero()
    }, [])



    return (
        <div className='pb-20 pt-36'>
            <div>
                <div className='w-full h-full z-50'>
                    <Spotlight gradientFirst='radial-gradient( 68.54% 68.72% at 55.02% 31.46%,hsla(270, 100%, 80%, 0.12) 0%,hsla(270, 100%, 60%, 0.05) 50%,hsla(270, 100%, 50%, 0) 80%)' gradientThird='radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, 0.15) 0%, hsla(0, 0%, 90%, 0.07) 50%, hsla(0, 0%, 100%, 0) 80%)' gradientSecond='radial-gradient( 68.54% 68.72% at 55.02% 31.46%,hsla(270, 100%, 80%, 0.12) 0%,hsla(270, 100%, 60%, 0.05) 50%,hsla(270, 100%, 50%, 0) 80%)' />
                </div>
                <div className="absolute opacity-60 min-h-screen top-0 left-0 -z-10 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black-100">
                    <div
                        className={cn(
                            "absolute inset-0",
                            "[background-size:40px_40px]",
                            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                        )}
                    />
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                    <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                    </p>
                </div>

                <div className='flex justify-center relative my-20'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

                        {hero.name ?
                            <h1 className='uppercase tracking-widest  text-center text-blue-100 max-w-80'>{hero?.name}</h1>
                            : <LoaderSkeleton lines={1} className='w-32 my-2' />}

                        {hero.title ?
                            <h2 className='text-center md:tracking-wider bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent capitalize'>{hero?.title}</h2>
                            : <LoaderSkeleton lines={1} className='w-48 my-2' />}

                        {hero.description ?
                            <TextGenerateEffect className='text-center text-blue-100 text-2xl' duration={0.2} words={hero.description} />
                            : <LoaderSkeleton lines={3} className='w-[650px] my-2' />}


                        <a href="#about" className='flex mt-14 flex-shrink items-center justify-center'>
                            <MagicButton className='font-bold text-[16px]' icon={<IoIosSend className='mt-1 size-5' />} position='right' title={'Show my work'} />
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero