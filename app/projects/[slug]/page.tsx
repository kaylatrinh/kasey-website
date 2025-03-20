import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const projects = {
  "spring-collection": {
    title: "Spring Collection",
    description: "Sustainable fashion designs inspired by nature",
    year: "2025",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    details:
      "This collection explores the relationship between sustainable materials and modern silhouettes. Each piece is crafted with eco-friendly fabrics and natural dyes, emphasizing the beauty of imperfection and organic forms.",
  },
  "textile-experiments": {
    title: "Textile Experiments",
    description: "Exploring innovative materials and techniques",
    year: "2024",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    details:
      "A series of experimental textile works that investigate unconventional materials and techniques. This project pushed the boundaries of traditional textile design through innovative approaches to weaving, dyeing, and surface manipulation.",
  },
  "urban-sketches": {
    title: "Urban Sketches",
    description: "City-inspired artwork and illustrations",
    year: "2024",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    details:
      "A collection of sketches and illustrations inspired by urban environments. These works capture the energy, architecture, and human interactions that define city life, using a combination of traditional and digital media.",
  },
  "concept-designs": {
    title: "Concept Designs",
    description: "Experimental fashion concepts and prototypes",
    year: "2023",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    details:
      "This series of conceptual fashion designs explores futuristic silhouettes and innovative construction techniques. Each piece challenges conventional notions of wearability while maintaining a focus on craftsmanship and detail.",
  },
  "color-studies": {
    title: "Color Studies",
    description: "Exploration of color theory in fashion and art",
    year: "2023",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    details:
      "A systematic exploration of color relationships and their emotional impact in both fashion and fine art contexts. This project investigates how color combinations can evoke specific moods and enhance visual communication.",
  },
  "pattern-work": {
    title: "Pattern Work",
    description: "Original textile patterns and print designs",
    year: "2022",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    details:
      "A collection of original pattern designs for textiles and surface applications. This project explores rhythm, scale, and repetition to create visually compelling patterns that can be applied to various fashion and interior contexts.",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return <div>Project not found</div>
  }

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
                Back to all projects
              </Link>
            </Button>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Year:</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Project Details</h2>
                  <p>{project.details}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={`${project.title} - Main Image`}
                    width={1200}
                    height={800}
                    className="aspect-[3/2] object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={project.images[1] || "/placeholder.svg"}
                      alt={`${project.title} - Detail 1`}
                      width={600}
                      height={400}
                      className="aspect-[3/2] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={project.images[2] || "/placeholder.svg"}
                      alt={`${project.title} - Detail 2`}
                      width={600}
                      height={400}
                      className="aspect-[3/2] object-cover"
                    />
                  </div>
                </div>
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

