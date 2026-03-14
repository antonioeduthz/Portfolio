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
    <div className="m-3 flex h-52 w-80 flex-col items-center justify-between p-3 font-mono outline-0 outline-white hover:outline-1">
      <div>
        <h3 className="font-sans text-xl">{title}</h3>
        <p className="mb-3">{description}</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          {techStack.map((tech) => (
            <span key={tech} className="text-xs">
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
