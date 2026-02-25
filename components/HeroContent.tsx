"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react";
import { HeroContentProps } from "@/types";

export default function HeroContent({ fullName, summary, title }: HeroContentProps) {
    return (
        <div className='flex justify-center relative my-20'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <motion.h1 initial={{ y: 10, opacity: 0, scale: 0.90 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className='uppercase tracking-widest  text-center text-blue-100 max-w-80 text-3xl font-semibold animate-in transform:'>{fullName}</motion.h1>

                <motion.h2 initial={{ y: 10, opacity: 0, scale: 0.90 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className='text-center md:tracking-wider bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-3xl text-transparent font-serif capitalize'>{title}</motion.h2>

                <TextGenerateEffect className='text-center text-blue-100 text-2xl' duration={0.1} words={summary} />

                <motion.div initial={{ opacity: 0, scale: 0.90 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className='flex gap-4 items-center mt-14'>
                    <a href="#projects" className='flex flex-shrink items-center justify-center mb-1'>
                        <MagicButton className='font-bold text-[16px] px-7 rounded-xl' rounded='rounded-xl' icon={<IoIosArrowDown className='mt-1 size-5' />} position='right' title={'Show my work'} />
                    </a>

                </motion.div>

            </div>
        </div>
    );
}