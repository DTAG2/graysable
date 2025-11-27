import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import TeamMember from "@/components/TeamMember";

export const metadata: Metadata = {
  title: "About | GraySable",
  description: "GraySable builds custom automation systems with software and hardware working together.",
};

const teamMembers = [
  {
    name: "Daniel Gonzales",
    role: "Co-Founder",
    bio: "Computer engineer specializing in hardware design, software automation, and systems integration at GraySable.",
    initials: "DG",
    image: "/team/daniel.jpg",
    imagePosition: "center",
  },
  {
    name: "Oliver Gonzales",
    role: "Co-Founder",
    bio: "Engineer focused on algorithmic systems, data architecture, and cybersecurity at GraySable.",
    initials: "OG",
    image: "/team/oliver.jpg",
    imagePosition: "center 20%",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-6">
              About
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              Gray<span className="text-gray-500">Sable</span>
            </h1>
            <p className="mt-10 text-xl text-gray-400 max-w-xl leading-relaxed">
              We build custom automation systems with software and hardware
              working together. Tailored to your operation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-950 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-800" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-gray-800">
            <AnimatedSection className="bg-black p-12">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-4">
                01
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">What We Do</h2>
              <p className="text-gray-400 leading-relaxed">
                We build custom automation systems with software and hardware working
                together. From workflows and integrations to PCB design and FPGA
                development. Built to your specific requirements.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="bg-black p-12">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-4">
                02
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">How We Work</h2>
              <p className="text-gray-400 leading-relaxed">
                You work directly with engineers. We scope the problem, design the
                system, build it, and deploy it. No account managers, no layers of
                project management. Direct communication throughout.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-800" />

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-4">
              Capabilities
            </span>
            <h2 className="text-4xl font-bold tracking-tighter uppercase">
              Technical Stack
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                number: "01",
                title: "Software",
                description:
                  "Automation logic, workflows, integrations, dashboards. The core of every project we build.",
              },
              {
                number: "02",
                title: "Hardware",
                description:
                  "PCB design, FPGA development, and embedded devices. Custom hardware integrated with your software stack.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div>
                  <span className="text-xs font-mono text-gray-600 block mb-4">
                    {value.number}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-950 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-800" />

        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 block mb-4">
              Team
            </span>
            <h2 className="text-4xl font-bold tracking-tighter uppercase">The Team</h2>
            <p className="mt-4 text-gray-500">
              Engineers who build both software and hardware.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl items-stretch">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1} className="h-full">
                <TeamMember {...member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
