import { Hero } from '@/components/sections/hero'
import { Technology } from '@/components/sections/tech'
import { Project } from '@/components/sections/projects'

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        <Hero className="col-span-2 m-15" />
        <Project className="col-span-1 m-10" />
      </div>
    </main>
  )
}
