import { Hero } from '@/components/sections/hero'
import { Technology } from '@/components/sections/tech'
import { Project } from '@/components/sections/projects'
import { HeroSocial } from '@/components/sections/hero-social'
import { AboutMe } from '@/components/sections/aboutme'

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-5 p-5 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:p-20">
      {/* <div className="grid grid-cols-4 grid-rows-2 gap-4 p-20">
        <Hero className="col-span-2 row-span-1 pb-25" />
        <HeroSocial className="col-span-2 row-span-1 justify-center pl-70" />
        <AboutMe className="col-span-2 row-span-1" />
        <Technology className="col-span-2 row-span-1" />
      </div>
      <Project className="col-span-4 row-span-1 flex w-full" /> */}
      <Hero className="lg:col-span-2 lg:row-span-1" />
      <HeroSocial className="hidden justify-center lg:col-span-2 lg:row-span-1 lg:inline" />
      <AboutMe />
      <Technology />
      <Project />
    </main>
  )
}
