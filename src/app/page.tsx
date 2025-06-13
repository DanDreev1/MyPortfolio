import Hero from "@/components/Home/Hero";
import { CoreValues } from "@/components/Home/CoreValues";
import { Footer } from "@/components/Footer";
import { FeaturedProjects } from "@/components/Home/FeaturedProjects";
import { MottoSection } from "@/components/Home/MottoSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CoreValues />
      <FeaturedProjects />
      <MottoSection />
      <Footer />
    </main>
  );
}