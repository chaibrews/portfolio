import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Reveal
 * Wraps any content and animates it in when it enters the viewport.
 *
 * @prop {"fade" | "slide-up" | "slide-left" | "slide-right"} variant - animation style
 * @prop {number} delay - delay in ms, useful for staggering siblings. Default 0
 * @prop {string} className - extra classes forwarded to the wrapper div
 *
 * Usage:
 *   <Reveal variant="slide-up" delay={100}>
 *     <YourComponent />
 *   </Reveal>
 */

const VARIANTS = {
  fade: "opacity-0",
  "slide-up": "opacity-0 translate-y-8",
  "slide-left": "opacity-0 -translate-x-8",
  "slide-right": "opacity-0 translate-x-8",
};

export const Reveal = ({
  children,
  variant = "slide-up",
  delay = 0,
  className = "",
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : VARIANTS[variant]
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};
