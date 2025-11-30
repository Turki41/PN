import { techStack } from "@/data"
import { GridItem } from "@/types"
import grid from '../public/grid.svg'

const Technologies = () => {
    return (
        <section id="technologies" className="min-h-screen flex items-center justify-center mt-20">
            <div className="">
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl font-bold text-blue-100 mb-6">Technologies I Work With</h2>
                    <p className="text-gray-500 mb-10 max-w-2xl">Here are some of the key technologies and tools I utilize in my development projects to build efficient and scalable applications.</p>
                </div>


                <div className={'max-w-7xl gap-2 max-h-screen grid  md:grid-cols-4 md:grid-rows-5 lg:grid-cols-4 lg:grid-rows-4'}>
                    {techStack.map((tech: GridItem) => (
                        <div key={tech.id} style={{  backgroundImage: `url(${grid.src})`}} className={`flex flex-col overflow-hidden items-center rounded-xl border p-6 ${tech.id === 1 && 'col-span-2 row-span-2'} ${(tech.id === 4 || tech.id === 5) && 'col-span-2'} ${tech.id === 5 && 'cols'}`}>
                            
                            <div className={`flex w-full h-full ${tech.id === 1 ? 'justify-between' : ''} ${(tech.id === 4 || tech.id === 5) ? 'flex-row gap-5' : 'flex-col'} items-center gap-2`}>
                                <div className={` w-full flex-1 flex ${(tech.id === 1 || tech.id === 4 || tech.id === 5) ? 'text-blue-500' : 'justify-center text-white'}`}>
                                    <tech.icon size='25' />
                                </div>

                                <div className={`flex flex-col w-full truncate justify-center ${tech.id !== 4 && tech.id !==5 && tech.id !== 1 ? 'items-center text-center' : ''}`}>
                                    <h3 className="text-xl text-blue-100 font-semibold mb-2">{tech.title}</h3>
                                    <p className="text-start text-gray-500 text-sm">{tech.description}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies