export function Footer() {
  return (
    <footer className="relative px-6 lg:px-10 pb-10 pt-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-4 gap-10 hairline pt-12">
          <div>
            <div className="font-display text-2xl tracking-[0.3em] font-light mb-4">CHRONOSWISS</div>
            <p className="text-sm text-foreground/50 max-w-xs">Independent Swiss haute horology since 1983.</p>
          </div>
          {[
            { h: "Watches", l: ["Tourbillon", "Chronograph", "Classic", "Limited"] },
            { h: "Maison", l: ["Heritage", "Atelier", "Craft", "Press"] },
            { h: "Service", l: ["Warranty", "Repair", "Authentication", "Contact"] },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="text-xs tracking-[0.3em] uppercase text-foreground/80 mb-5">{c.h}</h4>
              <ul className="space-y-3 text-sm text-foreground/50">
                {c.l.map((i) => <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 hairline pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-foreground/40 tracking-wider">
          <span>© 2026 Chronoswiss Manufacture. Lucerne, Switzerland.</span>
          <span>Crafted with patience.</span>
        </div>
      </div>
    </footer>
  );
}
