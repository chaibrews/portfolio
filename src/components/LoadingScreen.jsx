import { useEffect, useState } from "react";

const BOOT_LINES = [
  { text: "booting chai.os v1.0.0...", delay: 0 },
  { text: "loading kernel modules...", delay: 400 },
  { text: "mounting filesystems... ok", delay: 750 },
  { text: "initializing runtime environment... ok", delay: 1100 },
  { text: "checking dependencies... ok", delay: 1450 },
  { text: "brewing coffee ☕...", delay: 1800 },
  { text: "システム準備完了... ok", delay: 2200 }, // "System ready... ok"
  { text: "ようこそ。", delay: 2700, highlight: true }, // "Welcome."
];

/**
 * LoadingScreen
 * Shows a terminal boot sequence, then fades out once:
 *   1. All assets have loaded (window onload)
 *   2. The minimum sequence has finished playing
 *
 * Skipped entirely on return visits via localStorage.
 */
export const LoadingScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [exiting, setExiting] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [sequenceDone, setSequenceDone] = useState(false);

  // Listen for window load
  useEffect(() => {
    if (document.readyState === "complete") {
      setAssetsReady(true);
    } else {
      const handler = () => setAssetsReady(true);
      window.addEventListener("load", handler);
      return () => window.removeEventListener("load", handler);
    }
  }, []);

  // Type out lines one by one
  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (i === BOOT_LINES.length - 1) {
          // Give the last line a moment to breathe before marking done
          setTimeout(() => setSequenceDone(true), 600);
        }
      }, line.delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Dismiss when both conditions are met
  useEffect(() => {
    if (assetsReady && sequenceDone) {
      setExiting(true);
      const t = setTimeout(() => {
        localStorage.setItem("chaibrews_booted", "1");
        onComplete();
      }, 600); // matches fade-out duration
      return () => clearTimeout(t);
    }
  }, [assetsReady, sequenceDone, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-600 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Scanline overlay — subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      <div className="w-full max-w-lg px-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-primary text-sm font-bold tracking-widest">
            ~/chaibrews
          </span>
          <span className="font-mono text-muted-foreground text-xs">
            — bash
          </span>
        </div>

        {/* Boot lines */}
        <div className="space-y-1.5 font-mono text-sm min-h-[200px]">
          {BOOT_LINES.map((line, i) => (
            <div
              key={i}
              className={`flex items-start gap-2 transition-all duration-300 ${
                visibleLines.includes(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }`}
            >
              <span className="text-primary select-none mt-px">›</span>
              <span
                className={
                  line.highlight ? "text-highlight" : "text-muted-foreground"
                }
              >
                {line.text}
              </span>
            </div>
          ))}

          {/* Blinking cursor — shows after last line appears */}
          {visibleLines.length === BOOT_LINES.length && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-primary select-none">›</span>
              <span
                className="inline-block w-2 h-4 bg-primary align-middle"
                style={{ animation: "cursor-blink 1s step-end infinite" }}
              />
            </div>
          )}
        </div>

        {/* Bottom status bar */}
        <div className="mt-10 flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest uppercase">
            chai.os
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest">
            {assetsReady ? "ready" : "loading assets..."}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
