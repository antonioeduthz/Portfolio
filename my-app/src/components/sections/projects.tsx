import { ProjectCard } from '../ui/ProjectCard'

export function Project({ className = '' }) {
  return (
    <section className={`{${className} flex flex-col items-start`}>
      <div>
        <h2 className="font-inter pb-5 text-3xl">My Projects</h2>

        <ul className="flex flex-col items-start gap-10 md:flex-row">
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
    </section>
  )
}
