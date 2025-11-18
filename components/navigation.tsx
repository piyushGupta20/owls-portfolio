"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/shared/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-display font-bold tracking-tight">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    if (element) {
                      const offset = 80
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - offset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      })
                    }
                  }
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md cursor-pointer",
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            
            {/* Mobile Navigation */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        setOpen(false)
                        if (item.href.startsWith('#')) {
                          e.preventDefault()
                          setTimeout(() => {
                            const element = document.querySelector(item.href)
                            if (element) {
                              const offset = 80
                              const elementPosition = element.getBoundingClientRect().top
                              const offsetPosition = elementPosition + window.pageYOffset - offset
                              window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                              })
                            }
                          }, 100)
                        }
                      }}
                      className={cn(
                        "px-4 py-2 text-base font-medium transition-colors hover:text-primary rounded-md cursor-pointer",
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

