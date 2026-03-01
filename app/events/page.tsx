import Link from "next/link"
import { departments } from "@/lib/events-data"
import LuminusParticles from "../Home page/vercel-logo-particles"

const GRAND_HACKATHON_ID = "grand-hackathon"

export default function EventsPage() {
  const grandHackathon = departments.find((d) => d.id === GRAND_HACKATHON_ID)
  const otherDepartments = departments.filter((d) => d.id !== GRAND_HACKATHON_ID)

  return (
    <main className="relative min-h-screen">
      <LuminusParticles startDispersed hideCursor={false} particleGap={4} />
      <div className="relative z-10 pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <header className="mb-8">
            <h1 className="text-[2rem] font-semibold tracking-tight text-white sm:text-3xl">
              Events
            </h1>
            <p className="mt-1.5 text-sm text-white/50">
              Pick a department to see its events.
            </p>
          </header>

          {grandHackathon && (
            <section className="mb-8" aria-label="Main highlight">
              <Link
                href={`/events/${grandHackathon.id}`}
                className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.09] hover:border-white/[0.12]">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-amber-400/70" aria-hidden />
                  <div className="relative pl-7 pr-6 py-5 sm:pl-9 sm:py-6">
                    <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-amber-400/60">
                      Featured
                    </p>
                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {grandHackathon.fullName ?? grandHackathon.name}
                    </h2>
                    <p className="mt-1 text-sm text-amber-200/80">
                      24 hr · ₹1,20,000 prize pool
                    </p>
                    <p className="mt-2 text-[13px] text-white/50 transition-colors group-hover:text-white/70">
                      View details →
                    </p>
                  </div>
                </div>
              </Link>
            </section>
          )}

          <section aria-label="Departments">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              By department
            </p>
            <div className="space-y-1.5">
              {otherDepartments.map((dept) => (
                <Link
                  key={dept.id}
                  href={`/events/${dept.id}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-3 backdrop-blur-xl transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/15 sm:px-6"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-white/95 text-[15px] tracking-tight">
                      {dept.fullName ?? dept.name}
                    </p>
                    <p className="mt-0.5 text-xs text-white/45">
                      {dept.events.length} event{dept.events.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {dept.events.map((ev) => (
                        <span
                          key={ev.name}
                          className="text-[11px] font-medium uppercase tracking-wider text-white/50"
                        >
                          {ev.type}
                        </span>
                      ))}
                    </div>
                    <span className="text-white/30 text-sm transition-all group-hover:translate-x-0.5 group-hover:text-white/50" aria-hidden>
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
