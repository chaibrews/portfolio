import {
  Briefcase,
  BriefcaseIcon,
  Code2,
  Coffee,
  CoffeeIcon,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "clepilepsia@gmail.com",
    href: "mailto:clepilepsia@gmail.com",
    icon: Mail,
    className: "bg-primary text-white hover:brightness-110",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/clepilepsia",
    href: "https://www.linkedin.com/in/clepilepsia/",
    icon: Briefcase,
    className: "bg-[#0a66c2] text-white hover:brightness-110",
  },
  {
    label: "GitHub",
    value: "github.com/chaibrews",
    href: "https://github.com/chaibrews",
    icon: ExternalLink,
    className: "bg-surface text-white hover:brightness-110",
  },
];

const TAGLINE = ["creative", "writer", "developer", "problem solver"];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-4 py-20 md:py-24 overflow-hidden"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl md:h-72 md:w-72" />
        <div className="absolute bottom-10 right-8 h-40 w-40 rounded-full bg-highlight/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-2xl">
        <Reveal variant="fade">
          <div className="mx-auto mb-6 max-w-md text-center md:mb-8">
            <h2 className="text-3xl font-bold md:text-4xl">
              Contact <span className="text-primary">Me</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Want to collaborate, talk about a role, or ask about one of my
              projects? Here&apos;s my call card.
            </p>
          </div>
        </Reveal>

        <Reveal variant="slide-up" delay={150}>
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-surface bg-[#141017]/95 font-mono text-foreground shadow-2xl shadow-black/20 backdrop-blur">
            {/* top bar */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-surface px-4 py-3 sm:px-5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>

            <div className="grid gap-0">
              {/* identity panel */}
              <div className="border-b border-surface p-5 sm:p-7 sm:pb-0 md:border-b-0 md:border-r">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="relative mx-auto flex-shrink-0 sm:mx-0"></div>

                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-primary">
                      @chaibrews
                    </p>
                    <h3 className="mt-2 text-lg  text-white sm:text-lg">
                      Charlene Epilepsia
                    </h3>
                    <p className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:justify-start">
                      <Code2 size={13} className="text-primary" />
                      Software Engineer
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:justify-start">
                      <MapPin size={13} className="text-primary" />
                      Metro Manila, PH
                    </p>
                  </div>
                </div>
              </div>

              {/* action panel */}
              <div className="flex flex-col justify-between p-5 sm:p-7">
                <div className="space-y-3">
                  {CONTACT_LINKS.map(
                    ({ label, value, href, icon: Icon, className }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-3 rounded-md px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/15">
                          <Icon size={16} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10px] uppercase tracking-[0.24em] opacity-80">
                            {label}
                          </span>
                          <span className="block truncate text-xs">
                            {value}
                          </span>
                        </span>
                        <ExternalLink
                          size={15}
                          className="opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ),
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-surface px-4 py-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Coffee size={13} className="text-primary" />
                    coffee chats welcome
                  </span>
                  <span className="hidden text-right sm:inline">
                    callcard · 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
