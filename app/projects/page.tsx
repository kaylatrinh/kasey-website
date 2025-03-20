import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const projects = [
  {
    slug: "spring-collection",
    title: "Spring Collection",
    description: "Sustainable fashion designs inspired by nature",
    year: "2025",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    slug: "textile-experiments",
    title: "Textile Experiments",
    description: "Exploring innovative materials and techniques",
    year: "2024",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    slug: "urban-sketches",
    title: "Urban Sketches",
    description: "City-inspired artwork and illustrations",
    year: "2024",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    slug: "concept-designs",
    title: "Concept Designs",
    description: "Experimental fashion concepts and prototypes",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    slug: "color-studies",
    title: "Color Studies",
    description: "Exploration of color theory in fashion and art",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    slug: "pattern-work",
    title: "Pattern Work",
    description: "Original textile patterns and print designs",
    year: "2022",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    slug: "fashion-illustrations",
    title: "Fashion Illustrations",
    description: "Hand-drawn fashion illustrations and concept art",
    year: "2022",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    slug: "material-studies",
    title: "Material Studies",
    description: "Exploration of fabric textures and properties",
    year: "2021",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">PORTFOLIO</span>
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="font-medium">
            Work
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
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

