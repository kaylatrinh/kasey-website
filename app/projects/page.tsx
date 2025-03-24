import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import NavHeader from "@/app/header/page";


const projects = [
  {
    slug: "sailor-moon-shirt",
    title: "Sailor Moon Shirt",
    description: "The Sailor Moon Series",
    year: "2024",
    thumbnail: "/sailor-moon-shirt-1.jpg",
  },
  {
    slug: "sailor-moon-wand",
    title: "Sailor Moon Wand",
    description: "The Sailor Moon Series",
    year: "2024",
    thumbnail: "/wand-1.jpg",
  },
  {
    slug: "plus-size-body",
    title: "Drawing on a Plus Size Body",
    description: "Fashion Sketches and Flats",
    year: "2024",
    thumbnail: "/plus-size-1.png",
  },
  {
    slug: "man-best-friend",
    title: "A Man's Best Friend",
    description: "Fashion Sketches and Flats",
    year: "2023",
    thumbnail: "/dog-fashion-1.png",
  },
  {
    slug: "open-heart",
    title: "Open Heart",
    description: "Sewing Series",
    year: "2024",
    thumbnail: "/open-heart-1.jpg",
  },
  {
    slug: "romantic-dream",
    title: "A Romantic Dream",
    description: "Sewing Series",
    year: "2024",
    thumbnail: "/romantic-dream-1.jpg",
  },
  {
    slug: "lifescape-book",
    title: "Lifescape Book",
    description: "Fine Arts",
    year: "2024",
    thumbnail: "/lifescape-2.jpg",
  },
  {
    slug: "cruelty-fast-fashion",
    title: "The Cruelty of Fast Fashion",
    description: "Fine Arts",
    year: "2024",
    thumbnail: "/fast-fashion-1.jpg",
  },
  {
    slug: "layers-of-meaning",
    title: "Layers of Meaning",
    description: "Fine Arts",
    year: "2024",
    thumbnail: "/layers-meaning-1.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </Button>
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
                <p className="mt-4 text-muted-foreground">A collection of my design work and creative explorations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={600}
                        className="aspect-square object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 space-y-2">
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <p className="text-sm text-muted-foreground">{project.year}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2025 Portfolio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Instagram
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Behance
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            LinkedIn
          </Link>
        </nav>
      </footer>
    </div>
  )
}

