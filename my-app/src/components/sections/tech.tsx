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
    <section className={`border-white ${className} flex flex-col items-center`}>
      <div className="flex gap-10">
        {technology.map((tech) => (
          <div key={tech.title} className="flex flex-col items-center">
            <h3 className="mb-2 font-sans text-2xl">{tech.title}</h3>
            <ul className="">
              {tech.techs.map((value) => (
                <li
                  key={value.name}
                  className="transition:all mb-1 flex gap-2 duration-200 hover:scale-120"
                >
                  <Image
                    src={value.img}
                    width={15}
                    height={15}
                    alt={`{tech.name}`}
                  />
                  <span className="mb-1 font-mono">{value.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
