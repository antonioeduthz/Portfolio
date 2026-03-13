import Image from 'next/image'
import { Button } from '../ui/Button'

const projects = [
  {
    title: 'Placeholder 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, porro dolor.',
    img: '/images/project-placeholder.png',
    link: 'nada por enquanto',
  },
  {
    title: 'Placeholder 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, porro dolor.',
    img: '/images/project-placeholder.png',
    link: 'nada por enquanto',
  },
  {
    title: 'Placeholder 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, porro dolor.',
    img: '/images/project-placeholder.png',
    link: 'nada por enquanto',
  },
]

export function Project({ className = '' }) {
  return (
    <section
      className={`{${className} flex w-100 flex-col items-center bg-gray-950 p-5`}
    >
      <h2 className="font-inter text-2xl font-bold">Projetos</h2>
      <div>
        <ul className="">
          {projects.map((project) => (
            <li key={project.title} className="flex flex-col items-center">
              <Image
                src={project.img}
                alt={project.title}
                width={250}
                height={150}
                className="rounded-2xl"
              />
              <h3 className="font-inter">{project.title}</h3>
              <Button variant="primary">Link</Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
