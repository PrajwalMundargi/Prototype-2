"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Folder, Mail, Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "About", icon: User, href: "#about" },
    { name: "Projects", icon: Folder, href: "#projects" },
    { name: "Contact", icon: Mail, href: "#contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md sm:w-auto">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex items-center justify-between p-2 rounded-full border border-transparent bg-transparent shadow-[0_0_20px_-5px_rgba(76,29,149,0.5)] hover:shadow-[0_0_25px_-5px_rgba(30,64,175,0.6)] transition-shadow duration-300"
            >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 group"
                        >
                            <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center px-2">
                    <span className="font-bold text-white tracking-widest mr-auto">LUMINUS</span>
                </div>

                <div className="flex items-center gap-2">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full mt-2 p-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl flex flex-col gap-1 md:hidden overflow-hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-3"
                            >
                                <item.icon className="w-4 h-4" />
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
