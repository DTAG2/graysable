import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Custom Automation",
    number: "01",
    description:
      "End-to-end automation systems tailored to your operation. Workflows, integrations, and custom logic—built for production, not demos.",
  },
  {
    title: "Hardware Design",
    number: "02",
    description:
      "PCB design, FPGA development, embedded systems. From prototype to production-ready hardware that integrates with your stack.",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-gray-950 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-800" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-20">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-4">
                Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                What We Build
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-6xl font-bold text-gray-900">02</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-0">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="group border-t border-gray-800 py-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors duration-150 md:w-16">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase group-hover:text-gray-300 transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-2xl transition-colors duration-150">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
          {/* Bottom border */}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  );
}
