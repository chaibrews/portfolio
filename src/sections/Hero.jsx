import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Status Indicator */}
          <div className="flex items-center justify-center ">
            <div className="dot animate-pulse"></div>
            <span className="ml-2 font-mono text-xs tracking-widest text-highlight ">
              open to work
            </span>
          </div>
          {/* Intro */}
          <h1>
            <span className="text-4xl md:text-6xl font-bold tracking-tight">
              hi, i'm <span className="text-primary">chai</span>.
            </span>
          </h1>

          <p className="px-6">
            I'm a Software Engineer with 1.5+ years of experience. In the day, I
            refine systems, keep production stable, and resolve what breaks. At
            night,{" "}
            <span className="text-primary">I build whatever excites me</span>.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in">
            <a href="#projects" className="nav-button">
              {" "}
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
