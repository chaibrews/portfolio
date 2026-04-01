import { Code, User, Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  return (
    <section className="py-36 px-10 relative" id="about">
      <div className="container mx-auto max-w-5xl">
        <Reveal variant="fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center">
            READ<span className="text-primary">ME</span>.md
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — bio */}
          <Reveal variant="slide-right" delay={100}>
            <div className="space-y-4">
              <h3 className="text-xl tracking-tight">
                <p>
                  <span className="text-highlight">Software Engineer</span> by
                  Trade・<span className="text-primary">Web Developer</span> by
                  Passion
                </p>
              </h3>

              <div className="space-y-4 text-sm md:text-[16px]">
                <p className="text-muted-foreground">
                  I'm a Software Engineer with 1.5+ years of work experience
                  maintaining production systems across{" "}
                  <span className="text-highlight">
                    web, mobile, desktop, and low-level environments.
                  </span>{" "}
                  I've worked across multiple stacks, so I treat technologies as
                  tools. What I've gained that is far more valuable is the
                  ability to solve problems at the system level: understanding
                  how things break, why they break, and how to fix them
                  efficiently.
                </p>

                <p className="text-muted-foreground"></p>

                <p className="text-muted-foreground">
                  More than problem-solving,
                  <span className="text-primary"> I like to create</span>.
                  Outside of work, I like films, books, writing, and
                  design—anything that feels intentional. That shows up in what
                  I build: small tools, ideas, and projects that make life a
                  little easier or more interesting.
                </p>

                <p className="text-muted-foreground">
                  I'm currently looking to transition into a web development
                  role, where I can take ownership and build products that
                  people actually use.
                </p>
              </div>

              <div className="flex flex-column sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="primary-button">
                  Get In Touch
                </a>
                <a href="#contact" className="secondary-button">
                  Download CV
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Creating responsive websites and web applications with modern frameworks.",
                delay: 150,
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                desc: "Designing intuitive user interfaces and seamless user experiences.",
                delay: 250,
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                desc: "Leading projects from conception to completion with agile methodologies.",
                delay: 350,
              },
            ].map(({ icon, title, desc, delay }) => (
              <Reveal key={title} variant="slide-left" delay={delay}>
                <div className="glass p-6 card-hover rounded-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
                    <div className="text-left">
                      <h4 className="text-lg">{title}</h4>
                      <p className="text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
