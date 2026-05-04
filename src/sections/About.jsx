import { Reveal } from "@/components/Reveal";

const CARDS = [
  {
    label: "creative",
    symbol: "✦",
    symbolColor: "text-primary",
    description:
      "I've spent years as a freelance designer and video editor, with a hobby of drawing digital illustrations, that it shaped how I approach visual systems in design and code. Design isn't just decoration; it's structure, hierarchy, and intent.",
    footnote: "my creativity started with photoshop, not vs code.",
  },
  {
    label: "writer",
    symbol: "//",
    symbolColor: "text-highlight",
    description:
      "I started in school journalism, competed in feature writing, and still write poetry in my spare time. In my work, that translates into clean documentation, precise communication, and thinking clearly under constraints.",
    footnote: "writing has always been my way of thinking out loud.",
  },
  {
    label: "developer",
    symbol: "</>",
    symbolColor: "text-highlight",
    description:
      "I enjoy building things that excite me, whether it’s a small tool or a product that solves real problems. Most often, those problems are my own, which is why I tend to create the tools I need myself.",
    footnote:
      "i built buildR to write my resume, huntR to track my applications, and this site to showcase my works",
  },
  {
    label: "software engineer",
    symbol: "{}",
    symbolColor: "text-primary",
    description:
      "I'm experienced in production systems across web, mobile, desktop, and low-level environments. I understand how software works beyond the surface—where it fails, why it breaks, and how to make it more reliable.",
    footnote:
      "i always worried something would go wrong, but the things that went wrong were never what i worried about.",
  },
];

export const About = () => {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 md:py-32 md:px-10"
      id="about"
    >
      <div className="container mx-auto max-w-5xl">
        <Reveal variant="fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            About<span className="text-primary"> Me</span>
          </h2>
        </Reveal>

        {/* 2x2 on desktop, compact 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {CARDS.map(
            ({ label, symbol, symbolColor, description, footnote }, i) => (
              <Reveal key={label} variant="slide-up" delay={i * 100}>
                <article className="glass card-hover rounded-md h-full p-4 sm:p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    {/* Symbol */}
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-surface flex items-center justify-center">
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold ${symbolColor}`}
                      >
                        {symbol}
                      </span>
                    </div>

                    <div className="text-left space-y-2 flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg tracking-wide leading-tight">
                        a{" "}
                        <span className={`font-bold ${symbolColor}`}>
                          {label}
                        </span>
                      </h4>

                      <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                        {description}
                      </p>

                      <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground/40 tracking-wide pt-1 break-words leading-relaxed">
                        // {footnote}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
