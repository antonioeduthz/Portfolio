import { Hero } from '@/components/sections/hero'
import { Technology } from '@/components/sections/tech'
import { Project } from '@/components/sections/projects'
import { HeroSocial } from '@/components/sections/hero-social'
import { AboutMe } from '@/components/sections/aboutme'

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 p-20">
        <Hero className="col-span-2 row-span-1 pb-25" />
        <HeroSocial className="col-span-2 row-span-1 justify-center pl-70" />
        <AboutMe className="col-span-2 row-span-1" />
        <Technology className="col-span-2 row-span-1" />
      </div>

      <Project className="col-span-4 row-span-1 flex w-full" />
    </main>
  )
}
