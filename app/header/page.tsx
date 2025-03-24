import Link from "next/link"

export default function NavHeader() {
    return (
            <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold">Kasey Baugher</span>
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
    )
}

