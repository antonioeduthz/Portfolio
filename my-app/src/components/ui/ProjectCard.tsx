interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  github: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  techStack,
  github,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="flex h-52 max-w-80 flex-col items-center justify-between font-mono outline-0 outline-offset-4 outline-white hover:outline-1 md:w-55 lg:w-80">
      <div>
        <h3 className="font-sans text-xl">{title}</h3>
        <p className="mb-1 text-neutral-500">{description}</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="cursor-default text-xs text-neutral-600 hover:scale-110 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-4 font-mono">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github ↗
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
