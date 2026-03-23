import Image from 'next/image'

const socials = [
  {
    name: 'Github',
    url: 'https://github.com/antonioeduthz',
    image: '/images/github-logo.svg',
  },
  {
    name: 'Linkedin',
    url: 'Nada',
    image: '/images/linkedin-logo.svg',
  },
]

export function HeroSocial({ className = '', ...props }) {
  return (
    <div className={`mt-3 flex gap-5 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-200 hover:scale-110"
        >
          <Image src={social.image} width={40} height={40} alt="Github" />
        </a>
      ))}
    </div>
  )
}
