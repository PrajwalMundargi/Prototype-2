import type { Metadata } from "next"
import Image from "next/image"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SiteNav } from "@/components/site-nav"

import rnsitLogoImg from "@/assets/Rnsit_logo.png"
import logo25Img from "@/assets/25_logo.png"

export const metadata: Metadata = {
  title: "Luminus Techfest",
  description:
    "Luminus Techfest — Register for events, explore the schedule, and be part of the experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navigation */}
          <SiteNav />

          {/* Left Logo */}
          <div
            className="fixed top-4 left-4 z-50 flex h-14 sm:h-20 items-center justify-center pointer-events-none"
            aria-hidden
          >
            <Image
              src={rnsitLogoImg}
              alt="RNSIT Bengaluru"
              width={80}
              height={80}
              priority
              className="h-14 w-auto max-h-14 object-contain sm:h-20 sm:max-h-20"
            />
          </div>

          {/* Right Logo */}
          <div
            className="fixed top-4 right-4 z-50 flex h-14 sm:h-20 items-center justify-center pointer-events-none"
            aria-hidden
          >
            <Image
              src={logo25Img}
              alt="Luminus Techfest"
              width={80}
              height={80}
              priority
              className="h-14 w-auto max-h-14 object-contain sm:h-20 sm:max-h-20"
            />
          </div>

          {/* Page Content */}
          {children}

          {/* Toasts */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
