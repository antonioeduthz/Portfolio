import Image from 'next/image'
import { Button } from '../ui/Button'

export function Hero({ className = '', ...props }) {
  return (
    <section className={`container flex flex-col ${className}`}>
      <div className="flex flex-row">
        <Image
          src="/images/perfil.png"
          alt="Profile picture"
          width={75}
          height={75}
          className="mr-10 mb-3 rounded-full"
        />
        <div>
          <h1 className="font-inter text-4xl">Lorem ipsum dolor sit amet</h1>
          <p className="font-fira mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <Button className="ml-28 text-[15px]">View Resume ↗</Button>
    </section>
  )
}
