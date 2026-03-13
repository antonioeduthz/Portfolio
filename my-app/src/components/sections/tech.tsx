import Image from 'next/image'

const technologies = [
  { name: 'HTML', img: '/images/html-logo.svg' },
  { name: 'CSS', img: '/images/css-logo.svg' },
  { name: 'Javascript', img: '/images/js-logo.svg' },
]

export function Technology() {
  return (
    <section className="border-white bg-gray-950">
      <div className="">
        <h1 className="font-inter">Placholder</h1>
      </div>
      <div className="flex">
        <ul className="flex">
          {technologies.map((tech) => (
            <li className="mx-2 flex flex-col items-center gap-3">
              <Image
                src={tech.img}
                alt={`{tech.name} Logo`}
                width={60}
                height={60}
              />
              <h3>{tech.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
