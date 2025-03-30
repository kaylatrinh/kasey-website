import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import NavHeader from "@/app/header/page";
import {project_slugs} from "@/app/projects";
import NavFooter from "@/app/footer/page";

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
                {project_slugs.map((project) => (
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
      <NavFooter />
    </div>
  )
}

