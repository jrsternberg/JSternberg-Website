import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Clients from "@/components/sections/clients";
import Contact from "@/components/sections/contact";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Services />
      <Clients />
      <About />
      <Contact />
    </main>
  );
}
