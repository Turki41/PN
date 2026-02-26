import { sql } from "@/lib/db"
import ProjectsContent from "./ProjectsContent"
import { Project } from "@/types"


const Projects = async () => {
   const projects = (await sql`SELECT * FROM projects`) as Project[]

    return (
        <main>
            <ProjectsContent projects={projects}/>
        </main>
    )
}

export default Projects