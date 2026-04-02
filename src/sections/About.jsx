import { Code, User, Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  return (
    <section className="py-32 md:py-42 px-10 relative" id="about">
      <div className="container mx-auto max-w-5xl">
        <Reveal variant="fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center">
            About<span className="text-primary"> Me</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — bio */}
          <Reveal variant="slide-right" delay={100}>
            <div className="space-y-4">
              <div className="space-y-4 text-[18px] text-center">
                <p className="text-muted-foreground">
                  I'm a Software Engineer with 1.5+ years of work experience
                  maintaining production systems across{" "}
                  <span className="text-highlight font-bold">
                    web, mobile, desktop, and low-level environments.
                  </span>{" "}
                </p>

                <p className="text-muted-foreground"></p>

                <p className="text-muted-foreground">
                  Beyond problem-solving, I’m drawn to design, writing, and the
                  art of software development.
                  <span className="text-primary font-bold">
                    {" "}
                    I love to create
                  </span>
                  . Whether it’s small tools that make everyday tasks easier or
                  ambitious projects inspired by ideas I haven’t seen anywhere
                  else online,{" "}
                  <span className="text-primary font-bold">
                    building software is my way of making ideas happen.
                  </span>
                </p>
              </div>

              <div className="pt-2 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Got an idea, opportunity, or just want to say hi?
                </p>
                <a href="#contact" className="primary-button">
                  Send me a message
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                desc: "I understand how software works beyond the surface, where they fail, and how to make them more reliable.",
              },
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                desc: "From small tools to bigger ideas, I build things that make life easier or a bit more interesting.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                desc: "I'd like to focus on frontend and full-stack work that results in real, usable products.",
              },
            ].map(({ icon, title, desc, delay }) => (
              <Reveal key={title} variant="slide-left" delay={delay}>
                <div className="glass p-6 card-hover rounded-md">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
                    <div className="text-left">
                      <h4 className="text-lg">{title}</h4>
                      <p className="text-[16px] text-muted-foreground">
                        {desc}
                      </p>
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
