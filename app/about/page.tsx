import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">PORTFOLIO</span>
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="/about" className="font-medium">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                <p className="text-muted-foreground">
                  I'm a design student passionate about creating innovative clothing and artwork that pushes boundaries
                  and explores new concepts.
                </p>
                <div className="space-y-4">
                  <p>
                    My work focuses on the intersection of sustainability, technology, and traditional craftsmanship. I
                    believe in creating designs that not only look beautiful but also tell a story and serve a purpose.
                  </p>
                  <p>
                    Throughout my studies at [Design School], I've developed a strong foundation in textile design,
                    pattern making, illustration, and digital design tools. My approach combines meticulous attention to
                    detail with bold experimentation.
                  </p>
                  <p>
                    When I'm not designing, you can find me exploring art galleries, photographing urban landscapes, or
                    experimenting with new materials and techniques in my studio.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Education</h2>
                  <ul className="space-y-2">
                    <li>
                      <div className="font-medium">Bachelor of Fine Arts in Fashion Design</div>
                      <div className="text-sm text-muted-foreground">[Design School], Expected 2025</div>
                    </li>
                    <li>
                      <div className="font-medium">Certificate in Sustainable Textile Innovation</div>
                      <div className="text-sm text-muted-foreground">[Institution], 2023</div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">Fashion Design</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">Textile Design</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">Pattern Making</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">Illustration</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">Digital Design</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">Sustainable Practices</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">Color Theory</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-sm">3D Modeling</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Designer portrait"
                    width={600}
                    height={800}
                    className="mx-auto aspect-[3/4] object-cover"
                  />
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

