import watchmaker from "@/assets/watchmaker.jpg";

export function Heritage() {
  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <img src={watchmaker} alt="Master watchmaker at his bench" className="w-full h-full object-cover grayscale" loading="lazy" />
          <div className="absolute inset-0 ring-1 ring-foreground/10 rounded-lg" />
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--brand-cyan)] mb-5">— Since 1983</p>
          <h2 className="font-display font-light text-5xl md:text-6xl leading-[1.05] text-balance">
            Crafted by hand,<br/>
            <span className="italic text-glow">measured by eternity.</span>
          </h2>
          <p className="mt-8 text-foreground/60 leading-relaxed max-w-lg">
            Every Chronoswiss timepiece is assembled in our Lucerne atelier by a single master watchmaker.
            Over 320 components, polished, beveled and adjusted by hand — a quiet rebellion against the disposable.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 hairline pt-8">
            <div>
              <div className="font-display text-4xl text-glow">42</div>
              <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-2">Years of mastery</div>
            </div>
            <div>
              <div className="font-display text-4xl text-glow">320+</div>
              <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-2">Components</div>
            </div>
            <div>
              <div className="font-display text-4xl text-glow">1/1</div>
              <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-2">Watchmaker per piece</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
