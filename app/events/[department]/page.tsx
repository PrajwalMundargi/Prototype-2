import Link from "next/link"
import { notFound } from "next/navigation"
import { getDepartmentById, getDepartmentIds } from "@/lib/events-data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LuminusParticles from "../../Home page/vercel-logo-particles"

interface PageProps {
  params: Promise<{ department: string }>
}

export async function generateStaticParams() {
  return getDepartmentIds().map((id) => ({ department: id }))
}

export default async function DepartmentEventsPage({ params }: PageProps) {
  const { department: slug } = await params
  const dept = getDepartmentById(slug)
  if (!dept) notFound()

  return (
    <main className="relative min-h-screen">
      <LuminusParticles startDispersed hideCursor={false} particleGap={4} />
      <div className="relative z-10 pt-24 px-6 pb-24">
        <div className="max-w-3xl mx-auto text-white/90">
        <Link
          href="/events"
          className="text-sm text-white/70 hover:text-white mb-6 inline-block"
        >
          ← All events
        </Link>
        <h1 className="text-3xl font-semibold text-white mb-2">
          {dept.fullName ?? dept.name}
        </h1>
        <p className="text-white/70 mb-10">
          {dept.events.length} event{dept.events.length !== 1 ? "s" : ""} in this department.
        </p>
        <div className="space-y-5">
          {dept.events.map((ev) => (
            <Card
              key={ev.name}
              className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20"
            >
              <CardHeader className="pb-2 px-6 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-xl text-white tracking-tight">
                    {ev.name}
                  </CardTitle>
                  <Badge
                    variant={ev.type === "Flagship" ? "default" : "secondary"}
                    className={
                      ev.type === "Flagship"
                        ? "rounded-full bg-amber-500/20 text-amber-300 border-amber-500/40 px-2.5 py-0.5"
                        : "rounded-full bg-white/10 text-white/80 border-white/20 px-2.5 py-0.5"
                    }
                  >
                    {ev.type}
                  </Badge>
                </div>
                <CardDescription className="text-white/60 text-sm pt-1">
                  Team size: {ev.teamSize} · Duration: {ev.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6 text-sm text-white/80">
                <p><span className="text-white/60">Prize:</span> ₹{ev.prize.toLocaleString("en-IN")}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </main>
  )
}
