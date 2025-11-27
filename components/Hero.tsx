import Link from "next/link";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, white 1px, transparent 1px),
              linear-gradient(white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Interactive particle field */}
      <ParticleField />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="mb-8 animate-fade-in">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Automation / AI / Hardware
          </span>
        </div>

        <div className="animate-fade-in animation-delay-100">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
            Precision
            <br />
            <span className="text-gray-500">Automation</span>
          </h1>
        </div>

        <div className="mt-12 max-w-xl animate-fade-in animation-delay-200">
          <p className="text-lg text-gray-400 leading-relaxed">
            Custom automation systems with software and hardware working together.
            Built to your needs.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start gap-4 animate-fade-in animation-delay-300">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-white text-black font-medium uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors duration-150"
          >
            Tell Us What You Need
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-150">&rarr;</span>
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-gray-700 text-white font-medium uppercase tracking-wider text-sm hover:bg-gray-900 hover:border-gray-600 transition-colors duration-150"
          >
            How We Work
          </Link>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
