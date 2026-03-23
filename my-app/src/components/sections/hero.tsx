import Image from 'next/image'
import { Button } from '../ui/Button'

export function Hero({ className = '', ...props }) {
  return (
    <section
      className={`container flex flex-col items-start lg:flex-row ${className}`}
    >
      {/* <Image
        src="/images/perfil.png"
        alt="Profile picture"
        width={75}
        height={75}
        className="mr-10 mb-3 rounded-full"
      /> */}
      <div className="lg:flex lg:flex-col">
        <h1 className="font-inter pb-3 text-4xl">Lorem ipsum dolor sit amet</h1>
        <p className="font-fira text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <Button className="mt-5 text-[15px]">View Resume ↗</Button>
      </div>
    </section>
  )
}
