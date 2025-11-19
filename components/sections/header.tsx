'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
    { href: "/", name: "Home" },
    { href: "#services", name: "Services" },
    { href: "#projects", name: "Projects" },
    { href: "#process", name: "Process" },
    { href: "#testimonials", name: "Testimonials" },
    { href: "#contact", name: "Contact" },
  ]

export default function Header() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const isMobile = useIsMobile()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (isMobile && menuState) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobile, menuState])

    return (
        <header>
            {/* Backdrop blur overlay - mobile only */}
            <AnimatePresence>
                {isMobile && menuState && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setMenuState(false)}
                        className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo/>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 flex cursor-pointer items-center justify-center p-2.5 lg:hidden">
                                <Menu className={cn("size-6 duration-200 transition-all", menuState && "hidden")} />
                                <X className={cn("size-6 duration-200 transition-all", !menuState && "hidden")} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop menu - always visible */}
                        <div className="hidden lg:flex lg:w-fit lg:gap-6 lg:m-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:lg:bg-transparent">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:flex-row lg:space-y-0">
                                <Button
                                    asChild
                                    size="sm"
                                    ><Link href="#contact">
                                        <span>Let&apos;s Talk</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile menu - animated */}
                        <AnimatePresence>
                            {isMobile && menuState && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    className="mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap dark:shadow-none">
                                    <div>
                                        <motion.ul
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1, staggerChildren: 0.05 }}
                                            className="space-y-6 text-base">
                                            {menuItems.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.05 }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setMenuState(false)}
                                                        className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                        <span>{item.name}</span>
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                        <Button
                                            asChild
                                            size="sm"
                                            ><Link href="#contact" onClick={() => setMenuState(false)}>
                                                <span>Let&apos;s Talk</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </nav>
        </header>
    )
}