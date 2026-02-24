import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export const metadata = {
  title: "About — Aishwarya",
  description:
    "Learn more about Aishwarya — UI/UX Designer and Frontend Developer with 3+ years of experience.",
};

const skills = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "ProtoPie",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "TypeScript",
  "HTML/CSS",
  "JavaScript",
  "Git",
  "Responsive Design",
  "Design Systems",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
];

const experience = [
  {
    company: "Stanza Soft",
    role: "UI/UX Designer & Frontend Developer",
    period: "2023 — Present",
    description:
      "Leading design and frontend development for client projects, creating user-centered digital products from concept to launch. Responsible for the complete design process including research, wireframing, prototyping, and high-fidelity design, followed by pixel-perfect frontend implementation.",
  },
  {
    company: "Costco Wholesale",
    role: "UI/UX Design Intern",
    period: "2023",
    description:
      "Contributed to the design of internal tools and customer-facing experiences. Collaborated with cross-functional teams to improve usability and accessibility of digital products. Conducted user research and usability testing to inform design decisions.",
  },
  {
    company: "MasterCard",
    role: "UI/UX Design Intern",
    period: "2022",
    description:
      "Worked on design projects for enterprise-level fintech products. Gained experience in designing for complex workflows, data visualization, and accessibility compliance. Collaborated with senior designers and developers to deliver polished design solutions.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Photo + Bio */}
      <section className="px-6 md:px-8 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <ProfilePhoto className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-border/50" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
                  About Me
                </p>
                <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-foreground md:text-5xl">
                  I&apos;m{" "}
                  <span className="font-[family-name:var(--font-serif)] italic text-accent">
                    Aishwarya
                  </span>
                </h1>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    A UI/UX Designer and Frontend Developer with over 3 years of
                    experience crafting digital experiences that are both
                    beautiful and functional. I&apos;m passionate about the
                    intersection of design and technology, and I love solving
                    complex problems through thoughtful, user-centered design.
                  </p>
                  <p>
                    My journey has taken me through companies like MasterCard,
                    Costco, and Stanza Soft, where I&apos;ve honed my ability to
                    design for diverse audiences and complex use cases. I bring a
                    unique perspective that combines strong visual design skills
                    with hands-on frontend development experience.
                  </p>
                  <p>
                    I believe in design that&apos;s bold yet purposeful —
                    every pixel, every interaction, and every decision should
                    serve the user. I&apos;m particularly excited about
                    leveraging AI tools and workflows to push the boundaries of
                    what&apos;s possible in design.
                  </p>
                  <p>
                    Beyond my full-time work, I also take on freelance projects
                    to gain more exposure and experience across a variety of
                    fields that I feel genuinely excited about. It keeps me
                    sharp, broadens my perspective, and lets me collaborate with
                    diverse teams and industries.
                  </p>
                  <p>
                    When I&apos;m not designing or coding, you can find me
                    exploring new design trends, contributing to design
                    communities, and constantly learning new tools and
                    techniques.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mt-20 bg-muted px-6 py-20 md:mt-28 md:px-8 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
              Skills & Tools
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-foreground md:text-4xl">
              My{" "}
              <span className="font-[family-name:var(--font-serif)] italic">
                Toolkit
              </span>
            </h2>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill} delay={index * 0.03}>
                <span className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-all hover:border-accent hover:text-accent">
                  {skill}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-20 md:px-8 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-foreground md:text-4xl">
              Where I&apos;ve{" "}
              <span className="font-[family-name:var(--font-serif)] italic">
                Worked
              </span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-0 border-t border-border">
            {experience.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.1}>
                <div className="border-b border-border py-8 md:py-10">
                  <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
                    <div>
                      <h3 className="text-lg font-bold tracking-[-0.02em] text-foreground">
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-sm text-accent">{exp.role}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
