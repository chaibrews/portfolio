import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Returns a ref to attach to any element and a boolean `isVisible`.
 * Once visible, stays visible (no re-hiding on scroll up).
 *
 * @param {number} threshold - 0 to 1, how much of the element must be visible. Default 0.15
 * @param {string} rootMargin - IntersectionObserver rootMargin. Default "-50px"
 */
export const useScrollReveal = (threshold = 0.15, rootMargin = "-50px") => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once, stay visible
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
