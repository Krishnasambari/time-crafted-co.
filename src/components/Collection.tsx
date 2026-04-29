import watch2 from "@/assets/watch-2.jpg";
import watch3 from "@/assets/watch-3.jpg";
import watch4 from "@/assets/watch-4.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: watch2, name: "Opus Chronograph", ref: "OP—2210—GLD", price: "€ 18,400" },
  { img: watch4, name: "Space Timer Jupiter", ref: "ST—9001—NXT", price: "€ 12,900" },
  { img: watch3, name: "Sirius Classic", ref: "SR—4456—SLV", price: "€ 8,250" },
];

export function Collection() {
  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--brand-cyan)] mb-4">— The Collection</p>
            <h2 className="font-display font-light text-5xl md:text-6xl text-balance max-w-2xl">
              Three centuries of <span className="italic text-glow">precision</span>, reimagined.
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition">
            See all watches <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.ref} className="group relative overflow-hidden rounded-lg glass aspect-[4/5] cursor-pointer">
              <img
                src={it.img}
                alt={it.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)] via-[var(--brand-deep)]/40 to-transparent opacity-90" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <p className="text-[11px] tracking-[0.3em] text-[var(--brand-cyan)] mb-2">{it.ref}</p>
                <h3 className="font-display text-3xl font-light mb-3">{it.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/80 text-sm">{it.price}</span>
                  <button className="h-10 w-10 rounded-full bg-foreground/10 group-hover:bg-[var(--brand-glow)] group-hover:text-[var(--brand-deep)] grid place-items-center transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
