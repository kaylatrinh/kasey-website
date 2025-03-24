import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import NavHeader from "@/app/header/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kasey Baugher</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fashion Design Portfolio
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <h2 className="text-xl font-bold tracking-tight">Project Series</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/projects/spring-collection" className="group">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Sailor Moon Series"
                      width={600}
                      height={600}
                      className="aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium">Sailor Moon Series</h3>
                    <p className="text-sm text-muted-foreground">Sustainable fashion designs inspired by nature</p>
                  </div>
                </Link>
                <Link href="/projects/textile-experiments" className="group">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Textile Experiments"
                      width={600}
                      height={600}
                      className="aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium">Fashion Sketches and Flats</h3>
                    <p className="text-sm text-muted-foreground">Exploring innovative materials and techniques</p>
                  </div>
                </Link>
                <Link href="/projects/urban-sketches" className="group">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Urban Sketches"
                      width={600}
                      height={600}
                      className="aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium">Sewing Series</h3>
                    <p className="text-sm text-muted-foreground">City-inspired artwork and illustrations</p>
                  </div>
                </Link>
                <Link href="/projects/concept-designs" className="group">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Concept Designs"
                      width={600}
                      height={600}
                      className="aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-medium">Fine Arts</h3>
                    <p className="text-sm text-muted-foreground">Experimental fashion concepts and prototypes</p>
                  </div>
                </Link>
              </div>
              <Button asChild className="mt-8">
                <Link href="/projects">
                  View all projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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

