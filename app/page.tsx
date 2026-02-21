import Link from "next/link"
import VercelLogoParticles from "./Home page/vercel-logo-particles"

      {/* Techfest tagline + CTA */}
      <div className="absolute left-1/2 top-[55%] z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-white/90 text-sm sm:text-base font-medium tracking-wide">
          Tech • Innovation • Community
        </p>
        <Link
          href="/register"
          className="mt-4 inline-block rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 hover:border-white/30"
        >
          Register now
        </Link>
      </div>
export default function Page() {
  return (
    <main className="relative min-h-[300vh] bg-black">
      <VercelLogoParticles />
      <div className="relative z-10 h-[300vh]" />
    </main>
  )
}
