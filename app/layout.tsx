import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Briefcase, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FreelanceHub - Find Top Freelancers & Projects",
  description: "Connect with talented freelancers and get your projects done quickly and efficiently.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-6 md:gap-10">
                <Link href="/" className="flex items-center space-x-2">
                  <Briefcase className="h-6 w-6" />
                  <span className="font-bold inline-block">FreelanceHub</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link href="/find-talent" className="text-sm font-medium transition-colors hover:text-primary">
                    Find Talent
                  </Link>
                  <Link href="/find-work" className="text-sm font-medium transition-colors hover:text-primary">
                    Find Work
                  </Link>
                  <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                    Why Us
                  </Link>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-sm font-medium hidden md:inline-block">
                  Log in
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>
          {children}
          <footer className="w-full border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2023 FreelanceHub. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'