import { useState } from "react"

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-600 text-white font-semibold">
            VA
          </span>
          <span className="font-semibold text-slate-900">VacuumAssist</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a className="hover:text-teal-700" href="#how">
            How it works
          </a>
          <a className="hover:text-teal-700" href="#features">
            Features
          </a>
          <a className="hover:text-teal-700" href="#specs">
            Specs
          </a>
          <a className="hover:text-teal-700" href="#impact">
            Impact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700"
        >
          Request demo
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-pretty text-3xl md:text-5xl font-semibold text-slate-900">
            Vacuum‑assisted toilet that saves up to 80% water per flush
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Our vacuum-assisted system uses targeted suction and a high‑efficiency trapway to move waste with as little
            as 0.5 L per flush—without sacrificing performance.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-md bg-teal-600 px-5 py-3 text-white font-medium hover:bg-teal-700">
              Get a quote
            </a>
            <a href="#how" className="rounded-md border px-5 py-3 text-slate-800 hover:bg-white">
              See how it works
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-white shadow-sm border p-4">
              <dt className="text-xs text-slate-500">Water per flush</dt>
              <dd className="text-xl md:text-2xl font-semibold text-slate-900">0.5 L</dd>
            </div>
            <div className="rounded-lg bg-white shadow-sm border p-4">
              <dt className="text-xs text-slate-500">Savings vs. std.</dt>
              <dd className="text-xl md:text-2xl font-semibold text-slate-900">~80%</dd>
            </div>
            <div className="rounded-lg bg-white shadow-sm border p-4">
              <dt className="text-xs text-slate-500">Noise rating</dt>
              <dd className="text-xl md:text-2xl font-semibold text-slate-900">≤ 45 dB</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <img
            src="/vacuum-assisted-toilet-system-cutaway.jpg"
            alt="Cutaway diagram of the vacuum-assisted water-saving toilet system"
            className="w-full rounded-xl border shadow-sm"
          />
          <p className="mt-3 text-xs text-slate-500 text-center">
            Illustration of vacuum chamber, seal, and high‑efficiency trapway
          </p>
        </div>
      </div>
    </section>
  )
}

function Step({ index, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white text-sm">
        {index}
      </span>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 text-balance">
          How the vacuum-assisted system works
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <Step
              index={1}
              title="Pre-charge vacuum chamber"
              description="A compact, insulated chamber holds a controlled vacuum ready for each flush with minimal standby energy."
            />
            <Step
              index={2}
              title="Seal + accelerate"
              description="A quick-close seal creates a pressure differential that accelerates flow, reducing required water volume."
            />
            <Step
              index={3}
              title="Efficient transport"
              description="A smooth trapway and optimized venting maintain momentum while preventing clogs and odors."
            />
            <Step
              index={4}
              title="Smart refill"
              description="Sensors verify a clean cycle and refill only as needed, adapting to usage and conserving water."
            />
          </div>
          <div>
            <img
              src="/sequence-diagram-vacuum-flush-steps.jpg"
              alt="Sequence diagram showing the four steps of a vacuum-assisted flush"
              className="w-full rounded-xl border shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, description }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-lime-500/20 text-teal-700">
          {icon}
        </span>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Built for performance and sustainability</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature
            icon="💧"
            title="Ultra‑low water"
            description="Delivers industry‑leading water savings with 0.5 L nominal flush volume."
          />
          <Feature
            icon="🔇"
            title="Quiet operation"
            description="Acoustic dampening and optimized airflow keep noise below 45 dB."
          />
          <Feature
            icon="🛠️"
            title="Easy maintenance"
            description="Modular components and self‑diagnostics reduce downtime and service costs."
          />
          <Feature
            icon="🧪"
            title="Hygienic design"
            description="Anti‑microbial glazing and splash‑minimizing geometry improve cleanliness."
          />
          <Feature
            icon="⚡"
            title="Smart controls"
            description="Adaptive cycles, leak detection, and remote insights via optional IoT module."
          />
          <Feature
            icon="♻️"
            title="Sustainable materials"
            description="Durable ceramics and recyclable parts minimize life‑cycle impact."
          />
        </div>
      </div>
    </section>
  )
}

function Specs() {
  return (
    <section id="specs" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Technical specifications</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <ul className="rounded-xl border bg-white p-6 shadow-sm space-y-3 text-sm text-slate-700">
            <li className="flex justify-between gap-4">
              <span>Nominal flush volume</span>
              <span className="font-medium text-slate-900">0.5 L</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Peak negative pressure</span>
              <span className="font-medium text-slate-900">−35 kPa</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Noise level</span>
              <span className="font-medium text-slate-900">≤ 45 dB</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Power (standby/peak)</span>
              <span className="font-medium text-slate-900">1 W / 120 W</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Trapway diameter</span>
              <span className="font-medium text-slate-900">51 mm</span>
            </li>
          </ul>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <img
              src="/dimensioned-technical-drawing-toilet.jpg"
              alt="Dimensioned drawing of the toilet with height, depth, and rough-in measurements"
              className="w-full rounded-lg border"
            />
            <p className="mt-3 text-xs text-slate-500">Dimensions and installation clearances</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Impact() {
  return (
    <section id="impact" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Sustainability impact</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Annual water saved per unit</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">≈ 12,000 L</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">CO₂e avoided (water treatment)</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">≈ 18 kg</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Payback period (typical)</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">12–18 months</p>
          </div>
        </div>
        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-600">
            Estimates based on 5 flushes per person per day at 1.6 gpf baseline and regional utility rates. Actual
            results vary by installation and usage.
          </p>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="bg-teal-600">
      <div className="mx-auto max-w-6xl px-4 py-16 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-balance">
              Ready to cut water usage without compromise?
            </h2>
            <p className="mt-2 text-white/80 leading-relaxed">
              Talk to our team about pilots, pricing, and facility‑wide rollouts.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app, submit to your backend here.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-white text-slate-900 p-4">
        <p className="font-medium">Thanks! We’ll be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-4 text-slate-900 flex items-center gap-3">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600"
      />
      <button type="submit" className="rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700">
        Request demo
      </button>
    </form>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} VacuumAssist. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#specs" className="hover:text-teal-700">
            Specs
          </a>
          <a href="#impact" className="hover:text-teal-700">
            Impact
          </a>
          <a href="#contact" className="hover:text-teal-700">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Specs />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
