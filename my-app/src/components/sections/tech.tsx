import Image from 'next/image'

const technology = [
  {
    title: 'Front-End',
    techs: [
      { name: 'HTML', img: '/images/tech-logos/html-logo.svg' },
      { name: 'CSS', img: '/images/tech-logos/css-logo.svg' },
      { name: 'Javascript', img: '/images/tech-logos/js-logo.svg' },
      { name: 'React', img: '/images/tech-logos/react-logo.svg' },
    ],
  },
  {
    title: 'Back-End',
    techs: [
      { name: 'Node.js', img: '/images/tech-logos/node-logo.svg' },
      { name: 'express', img: '/images/tech-logos/express-logo.svg' },
    ],
  },
  {
    title: 'Tools',
    techs: [{ name: 'Git', img: '/images/tech-logos/git-logo.svg' }],
  },
]

export function Technology({ className = '' }) {
  return (
    <section className={`border-white ${className}`}>
      <div className="flex flex-col gap-10 md:flex-row">
        {technology.map((tech) => (
          <div key={tech.title} className="flex flex-col items-start">
            <h3 className="mb-2 font-sans text-3xl">{tech.title}</h3>
            <ul>
              {tech.techs.map((value) => (
                <li
                  key={value.name}
                  className="transition:all mb-1 flex gap-2 text-neutral-500 duration-200 hover:scale-120 hover:text-white"
                >
                  <Image
                    src={value.img}
                    width={15}
                    height={15}
                    alt={`{tech.name}`}
                  />
                  <span className="mb-1 cursor-default font-mono">
                    {value.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
