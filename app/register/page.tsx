import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="pt-24 px-6 mb-24">
      <div className="max-w-2xl mx-auto text-white/90">
        <h1 className="text-3xl font-semibold text-white mb-4">Register</h1>
        <p className="text-lg leading-relaxed mb-6">
          Secure your spot at Luminus Techfest. Registration form and details will be available here.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <p className="text-white/70 text-sm mb-4">Registration opens soon.</p>
          <Link
            href="/contact"
            className="text-sm font-medium text-white/90 underline underline-offset-2 hover:text-white"
          >
            Contact us for early access or queries →
          </Link>
        </div>
      </div>
    </main>
  )
}
