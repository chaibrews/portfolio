import { Reveal } from "@/components/Reveal";

const CORE_GROUPS = [
  {
    title: "Frontend",
    eyebrow: "web",
    description: "Interfaces, layouts, and client-side application work.",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend & Data",
    eyebrow: "server",
    description: "APIs, databases, and application foundations.",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    title: "Systems",
    eyebrow: "low level",
    description: "Systems-oriented languages, scripting, and environments.",
    skills: [
      "Java",
      "Python",
      "Objective-C",
      "C++",
      "C",
      "Bash",
      "Linux",
      "macOS",
    ],
  },
];

const SUPPORTING_TOOLS = [
  "Git",
  "Postman",
  "Vercel",
  "Render",
  "Figma",
  "Photoshop",
  "Android Studio",
  "Xcode",
  "Visual Studio",
  "IntelliJ IDEA",
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 px-4 sm:px-6 md:py-36 md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal variant="fade">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A focused mix of technologies I use to build, debug, and ship
              practical software.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {CORE_GROUPS.map(({ title, eyebrow, description, skills }, i) => (
            <Reveal key={title} variant="slide-up" delay={i * 90}>
              <article className="glass group h-full rounded-lg border border-surface/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.03] sm:p-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-highlight/80">
                      {eyebrow}
                    </p>
                    <h3 className="text-lg font-bold tracking-wide text-foreground">
                      {title}
                    </h3>
                  </div>

                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/70 opacity-60 transition group-hover:opacity-100" />
                </div>

                <p className="mb-2 min-h-0 text-sm leading-relaxed text-muted-foreground md:min-h-[3.5rem]">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-surface bg-secondary/70 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={280}>
          <aside className="mx-auto mt-5 rounded-lg border border-surface/70 bg-surface/15 px-4 py-4 sm:px-5 md:mt-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
              <div className="md:max-w-[12rem]">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/60">
                  supporting
                </p>
                <h3 className="mt-1 text-sm font-semibold text-foreground">
                  Tools & Design
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs leading-relaxed text-muted-foreground sm:text-sm md:justify-end">
                {SUPPORTING_TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="whitespace-nowrap rounded-full bg-background/30 px-2.5 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};
