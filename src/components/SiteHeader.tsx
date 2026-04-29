import { Link } from "@tanstack/react-router";
import { Heart, User, ShoppingBag, Menu, Search } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="text-foreground/80 hover:text-foreground" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="font-display text-2xl tracking-[0.3em] font-light">
            CHRONOSWISS
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-foreground/70">
          <Link to="/" className="hover:text-foreground transition">Watches</Link>
          <Link to="/" className="hover:text-foreground transition">Warranty & Service</Link>
          <Link to="/" className="hover:text-foreground transition">Stores</Link>
        </nav>

        <div className="flex items-center gap-5 text-foreground/70">
          <div className="hidden md:flex items-center gap-3 text-xs tracking-[0.2em]">
            <button className="hover:text-foreground">EUR ▾</button>
            <span className="opacity-30">|</span>
            <button className="hover:text-foreground">ENG ▾</button>
          </div>
          <button aria-label="Search" className="hover:text-foreground"><Search className="h-4 w-4" /></button>
          <button aria-label="Wishlist" className="hover:text-foreground"><Heart className="h-4 w-4" /></button>
          <button aria-label="Account" className="hover:text-foreground"><User className="h-4 w-4" /></button>
          <button aria-label="Cart" className="hover:text-foreground relative">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-[var(--brand-glow)] text-[10px] text-[var(--brand-deep)] grid place-items-center font-medium">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
