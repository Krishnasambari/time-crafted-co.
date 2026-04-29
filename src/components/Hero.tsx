import { useEffect, useState } from "react";
import heroWatch from "@/assets/hero-watch.webp";
import watchmaker from "@/assets/watchmaker.jpg";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    ref: "CH—3123—PABL",
    title: ["Open Gear", "Flying", "Tourbillon", "Paraiba"],
    italicIndex: 2,
    desc: "A masterwork of haute horology — its skeletonized movement floats beneath a hand-finished Paraiba dial, suspending time in luminous blue.",
    image: heroWatch,
    prev: "Opus Chronograph Titanium",
    next: "Space Timer Jupiter",
  },
  {
    ref: "TH—CAR—RED",
    title: ["Carrera", "Skeleton", "Chronograph", "Scarlet"],
    italicIndex: 1,
    desc: "A racing-inspired skeleton chronograph wrapped in vivid scarlet rubber — engineered for velocity, finished for the connoisseur.",
    image: heroWatch,
    prev: "Open Gear Tourbillon",
    next: "Monaco Heritage Blue",
  },
  {
    ref: "TH—MON—BLU",
    title: ["Monaco", "Heritage", "Square", "Édition"],
    italicIndex: 1,
    desc: "The icon reimagined. A square case, midnight dial, and storied lineage that redefined the chronograph in 1969.",
    image: heroWatch,
    prev: "Carrera Scarlet",
    next: "Aquaracer Abyss",
  },
  {
    ref: "TH—AQR—DPB",
    title: ["Aquaracer", "Professional", "Abyss", "300M"],
    italicIndex: 2,
    desc: "Built for the depths — ceramic bezel, luminous indices, and uncompromising water resistance for the modern explorer.",
    image: heroWatch,
    prev: "Monaco Heritage Blue",
    next: "Open Gear Tourbillon",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const slide = slides[index];
  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-32 pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[var(--brand-glow)]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left text */}
        <div key={`text-${index}`} className="lg:col-span-5 z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase text-[var(--brand-cyan)] mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)] animate-pulse" />
            Limited to 15 Pieces
          </div>

          <p className="text-xs tracking-[0.3em] text-foreground/50 mb-4">{slide.ref}</p>
          <h1 className="font-display font-light text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance">
            {slide.title.map((line, i) => (
              <span key={i} className="block">
                {i === slide.italicIndex ? (
                  <span className="italic text-glow">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-md text-foreground/60 leading-relaxed">{slide.desc}</p>

          <div className="mt-10 flex items-center gap-6">
            <button className="group inline-flex items-center gap-3 rounded-full bg-[var(--brand-glow)] hover:bg-[var(--brand-cyan)] text-[var(--brand-deep)] px-7 py-3.5 text-sm font-medium tracking-wide transition-all">
              Find out more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-sm tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition">
              View specs
            </button>
          </div>
        </div>

        {/* Watch image */}
        <div className="lg:col-span-7 relative h-[520px] md:h-[680px]">
          <img
            key={`img-${index}`}
            src={slide.image}
            alt={slide.title.join(" ")}
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-contain animate-watch-spin shadow-watch"
          />

          <div className="absolute top-4 right-4 text-[11px] tracking-[0.3em] text-[var(--brand-cyan)]">
            • AVAILABLE
          </div>

          <div className="absolute bottom-6 right-6 lg:right-0 w-[180px] h-[120px] rounded-md overflow-hidden glass group cursor-pointer">
            <img src={watchmaker} alt="Master watchmaker" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition" loading="lazy" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-12 w-12 rounded-full bg-[var(--brand-glow)] grid place-items-center text-[var(--brand-deep)] shadow-lg">
                <Play className="h-4 w-4 fill-current ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — collection navigation */}
      <div className="relative mt-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between text-xs tracking-[0.25em] uppercase text-foreground/50 hairline pt-6">
          <button
            onClick={() => goTo(index - 1)}
            className="hover:text-foreground transition flex items-center gap-2"
            aria-label="Previous watch"
          >
            <ChevronLeft className="h-4 w-4" /> {slide.prev}
          </button>
          <div className="hidden md:flex items-center gap-2 text-foreground/40">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex items-center gap-2 group"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span className={i === index ? "text-foreground" : "group-hover:text-foreground/70 transition"}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < slides.length - 1 && <span className="w-6 h-px bg-foreground/20" />}
              </button>
            ))}
          </div>
          <button
            onClick={() => goTo(index + 1)}
            className="hover:text-foreground transition flex items-center gap-2"
            aria-label="Next watch"
          >
            {slide.next} <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
