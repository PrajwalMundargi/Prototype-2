"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/schedule", label: "Schedule" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pillStyle, setPillStyle] = useState<{
    left: number
    width: number
    top: number
    height: number
    opacity: number
  } | null>(null)

  const activeIndex = navItems.findIndex(({ href }) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)
  )

  useEffect(() => {
    const container = containerRef.current
    const activeLink = activeIndex >= 0 ? linkRefs.current[activeIndex] : null
    if (!container || !activeLink) {
      setPillStyle((prev) => (prev ? { ...prev, opacity: 0 } : null))
      return
    }

    const update = () => {
      const cr = container.getBoundingClientRect()
      const lr = activeLink.getBoundingClientRect()
      setPillStyle({
        left: lr.left - cr.left,
        width: lr.width,
        top: lr.top - cr.top,
        height: lr.height,
        opacity: 1,
      })
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(container)
    return () => ro.disconnect()
  }, [activeIndex, pathname])

  return (
    <nav
      className={cn(
        "fixed top-4 left-0 right-0 z-50 mx-auto w-fit max-w-[min(92vw,26rem)]",
        "rounded-3xl",
        "border border-black/[0.06]",
        "bg-[#D1D8BE]",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.04)_inset,0_4px_24px_rgba(0,0,0,0.15)]",
        "backdrop-blur-xl",
        "transition-colors duration-200"
      )}
      aria-label="Main navigation"
    >
      <div
        ref={containerRef}
        className="relative flex h-12 items-center justify-center gap-0.5 px-2 py-1.5"
      >
        {/* Single sliding jelly pill – moves between options */}
        {pillStyle && (
          <span
            className="pointer-events-none absolute rounded-2xl bg-white/60"
            style={{
              left: pillStyle.left,
              top: pillStyle.top,
              width: pillStyle.width,
              height: pillStyle.height,
              opacity: pillStyle.opacity,
              transition:
                "left 0.85s cubic-bezier(0.22, 1, 0.36, 1), width 0.85s cubic-bezier(0.22, 1, 0.36, 1), top 0.85s cubic-bezier(0.22, 1, 0.36, 1), height 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out",
            }}
            aria-hidden
          />
        )}

        {navItems.map(({ href, label }, i) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href)
          return (
            <span key={href} className="contents">
              <Link
                ref={(el) => {
                  linkRefs.current[i] = el
                }}
                href={href}
                className={cn(
                  "relative z-10 rounded-2xl px-3 py-2 text-sm font-medium transition-colors duration-200",
                  "text-[#1a1a1a] hover:text-[#1a1a1a]",
                  isActive && "text-[#1a1a1a]",
                  !isActive && "hover:bg-black/[0.06] active:bg-black/[0.08]"
                )}
              >
                {/* Underline for selected */}
                <span
                  className={cn(
                    "absolute left-1/2 bottom-1.5 h-0.5 -translate-x-1/2 bg-[#1a1a1a] rounded-full",
                    "transition-all duration-300 ease-out origin-center",
                    isActive ? "w-[calc(100%-1rem)] opacity-100" : "w-0 opacity-0"
                  )}
                  aria-hidden
                />
                <span className="relative">{label}</span>
              </Link>
              {i < navItems.length - 1 && (
                <span
                  className="shrink-0 text-black text-xs leading-none select-none"
                  aria-hidden
                >
                  •
                </span>
              )}
            </span>
          )
        })}
      </div>
    </nav>
  )
}
