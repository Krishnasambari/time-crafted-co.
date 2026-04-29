import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Heritage } from "@/components/Heritage";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chronoswiss — Haute Horology, Hand-Crafted in Lucerne" },
      { name: "description", content: "Discover the Open Gear Flying Tourbillon Paraiba and other limited-edition Swiss luxury timepieces, hand-assembled by master watchmakers." },
      { property: "og:title", content: "Chronoswiss — Haute Horology" },
      { property: "og:description", content: "Independent Swiss luxury watches, hand-crafted since 1983." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Collection />
      <Heritage />
      <Footer />
    </main>
  );
}
