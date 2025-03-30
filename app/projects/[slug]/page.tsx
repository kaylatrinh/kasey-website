'use client';
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import {ArrowLeft, ArrowRight} from "lucide-react"

import { Button } from "@/components/ui/button"
import NavHeader from "@/app/header/page";
import {projects} from "@/app/projects";
import NavFooter from "@/app/footer/page";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  const otherImages = project.images; // All images after the first one
  const router = useRouter();

  return (
      <div className="flex flex-col min-h-screen">
        <NavHeader />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24">
            <div className="px-4 md:px-6">
              <div className="flex flex-wrap items-center justify-between">
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href="#"onClick={(e) => {
                  e.preventDefault();  // Prevent the default link behavior
                  router.back(); // Go to the previous page
                }}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to previous page
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href="/projects">
                  All Projects
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              </div>
              <div className="w-full grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="space-y-4">
                    {Array.isArray(project.details) ? (
                        project.details.map((detail, index) => <p key={index}>{detail}</p>)
                    ) : (
                        <p>{project.details}</p>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  {otherImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {otherImages.map((imgSrc, index) => (
                            <div key={index} className="overflow-hidden">
                              <Image
                                  src={imgSrc}
                                  alt={`${project.title} - Detail ${index + 1}`}
                                  width={400}
                                  height={600}
                                  className="object-contain w-full h-auto rounded-lg"
                              />
                            </div>
                        ))}
                      </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <NavFooter />
      </div>
  );
}