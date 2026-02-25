import { Spotlight } from './ui/spotlight-new'
import { cn } from '@/lib/utils'
import HeroContent from './HeroContent'
import { sql } from "@/lib/db";
const Hero = async () => {
    const heroData = (await sql`SELECT * FROM Hero LIMIT 1`)[0];


    return (
        <div id='about' className='min-h-screen flex flex-col items-center justify-center'>
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

                <HeroContent fullName={heroData.full_name} title={heroData.title} summary={heroData.summary} />
            </div>
        </div>
    )
}

export default Hero