import { ProjectCard } from '../ui/ProjectCard'

export function Project({ className = '' }) {
  return (
    <section className={`{${className} flex w-100 flex-col items-center`}>
      <div>
        <h2 className="font-inter ml-5 text-3xl">My Projects</h2>
        <div>
          <ul className="flex">
            <li>
              <ProjectCard
                title="Projeto legal"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis velit adipisci vero."
                techStack={['HTML', 'CSS', 'JavaScript']}
                github="https://github.com/antonioeduthz"
                liveUrl="https://github.com/antonioeduthz"
              />
            </li>
            <li>
              <ProjectCard
                title="Projeto normal"
                description="Esse projeto é um projeto normal"
                techStack={['HTML', 'CSS', 'JavaScript']}
                github="https://github.com/antonioeduthz"
              />
            </li>
            <li>
              <ProjectCard
                title="Projeto Foda"
                description="Esse projeto é um dos projetos mais fodas criados pela humanidade"
                techStack={['HTML', 'CSS', 'JavaScript']}
                github="https://github.com/antonioeduthz"
                liveUrl="https://github.com/antonioeduthz"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
