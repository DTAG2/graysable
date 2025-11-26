import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AnimatedSection from "@/components/AnimatedSection";
import IsometricCube from "@/components/IsometricCube";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />

      {/* Why GraySable Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-800" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-6">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                Why
                <br />
                Gray<span className="text-gray-500">Sable</span>
              </h2>
              <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                Speed and reliability. We build systems that ship fast and run
                without babysitting. Your mission moves faster when your tools
                just work.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  "Software, embedded, and hardware integrated",
                  "Built for production",
                  "You talk to engineers, not account managers",
                ].map((item, index) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-600">
                      0{index + 1}
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <IsometricCube />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-950 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-800" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-6">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              Ready to
              <br />
              <span className="text-gray-500">Move Fast?</span>
            </h2>
            <p className="mt-8 text-gray-400 text-lg max-w-xl mx-auto">
              Tell us what you need built. We&apos;ll tell you how fast we can
              ship it.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-white text-black font-medium uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors duration-200"
            >
              Get Started &rarr;
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
