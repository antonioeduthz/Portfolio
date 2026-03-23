import { Hero } from '@/components/sections/hero'
import { Technology } from '@/components/sections/tech'
import { Project } from '@/components/sections/projects'
import { HeroSocial } from '@/components/sections/hero-social'
import { AboutMe } from '@/components/sections/aboutme'

export default function Home() {
  return (
    <main className="">
      <div className="flex w-full flex-col justify-between gap-30 p-20 md:grid md:grid-cols-4 md:grid-rows-2">
        <Hero className="col-span-2" />
        <HeroSocial className="md: hidden w-full md:col-span-2 md:flex md:justify-end" />
        <AboutMe className="col-span-2" />
        <Technology className="col-span-2 md:flex md:justify-end" />
        <Project className="col-span-4" />
      </div>
    </main>
  )
}
