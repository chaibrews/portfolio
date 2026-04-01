import { Mail, Briefcase } from "lucide-react";

const TAGS = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Linux",
  "C/C++",
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-4 md:mb-8">
          Have a project in mind or want to discuss potential opportunities?
        </p>
        <div className="rounded-xl overflow-hidden border border-surface bg-[#141017] font-mono text-foreground w-full max-w-3xl mx-auto">
          {/* Titlebar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-primary border-b border-surface">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-semibold text-[10px] text-white tracking-wide">
              chai.callcard
            </span>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4 px-5 py-5 border-b border-surface">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-xl">
                ☕
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-highlight border-2 border-[#141017] animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-wide">
                Charlene Epilepsia
              </p>
              <p className="text-[11px] text-primary mt-0.5">@chaibrews</p>
              <p className="text-[11px] text-muted-foreground mt-1">
                Software Engineer · Metro Manila, PH
              </p>
            </div>
          </div>

          {/* Terminal */}
          <div className="px-5 py-4 border-b border-surface space-y-1">
            <p className="text-[11px]">
              <span className="text-primary">~/chai </span>
              <span>whoami</span>
            </p>
            <p className="text-[11px] text-muted-foreground pl-3">
              developer, coffee-enthusiast, creative
            </p>
            <p className="text-[11px] mt-2">
              <span className="text-primary">~/chai </span>
              <span>status</span>
            </p>
            <p className="text-[11px] text-muted-foreground pl-3">
              building <span className="text-highlight">Marginalia</span>
            </p>
            <p className="text-[11px] text-muted-foreground pl-3">
              studying for <span className="text-primary">JLPT N3</span>
            </p>
            <p className="text-[11px] mt-1">
              <span className="text-primary">~/chai </span>
              <span className="inline-block w-1.5 h-3 bg-primary align-middle animate-pulse" />
            </p>
          </div>

          {/* Tags */}
          <div className="px-5 py-2 flex flex-wrap gap-1.5">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-[9px] px-2.5 py-1 rounded-full border border-surface text-muted-foreground tracking-wide hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-surface px-5 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* Email */}
              <a
                href="mailto:clepilepsia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[10px] tracking-wide font-bold bg-highlight text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.04] active:scale-[0.97]"
              >
                <Mail size={12} />
                <span>send an email</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/clepilepsia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[10px] tracking-wide font-bold bg-[#0a66c2] text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.04] active:scale-[0.97]"
              >
                <Briefcase size={12} />
                <span>let's connect</span>
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};
