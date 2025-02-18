import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Expertise from "@/components/sections/expertise";
import Contact from "@/components/sections/contact";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Services />
      <Expertise />
      <About />
      <Contact />
    </main>
  );
}
