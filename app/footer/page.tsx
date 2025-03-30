import Link from "next/link";

export default function NavFooter() {
    return (
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
    )
}