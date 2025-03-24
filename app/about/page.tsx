import Link from "next/link"
import Image from "next/image"
import NavHeader from "@/app/header/page";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <main className="flex-1">
        <section className="w-full py-6 md:py-23 lg:py-20">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                <div className="space-y-4">
                  <p>
                    Hello! My name is Kasey Baugher, and I am a Vietnamese American emerging fashion designer studying
                    at Parsons School of Design. I am pursuing a degree in Fashion Design with a minor in Fashion
                    Business. My work is deeply inspired by my Vietnamese heritage and the diverse individuals who
                    shape and support me.
                  </p>
                  <p>
                    I specialize in techniques that add depth, movement, and artistry to every piece I create. I find
                    joy in blending traditional craftsmanship, such as intricate beading, with contemporary
                    innovations like laserwork. As I continue to grow in the fashion industy, I am eager to gain hands
                    on experience, collaborate with fellow creatives, and refine my skills in bringing visionary
                    designs to life.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Education</h2>
                  <ul className="space-y-2">
                    <li>
                      <div className="font-medium">Bachelor of Fine Arts in Fashion Design</div>
                      <div className="text-sm text-muted-foreground">Parsons School of Design, Expected 2027</div>
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
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/kasey-about-me.jpg"
                    alt="Designer portrait"
                    width={500}
                    height={700}
                    className="mx-auto object-cover rounded-lg"
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

