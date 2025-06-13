import { SkillsSnapshot } from "@/components/About/SkillsSnapshot";
import { ExperienceTimeline } from "@/components/About/ExperienceTimeline";
import { CTA } from '@/components/About/CTA';
import { Footer } from "@/components/Footer";
import MobileExperienceTimeline from "@/components/About/MobileTimeline";

export default function HomePage() {
  return (
    <main>
      <SkillsSnapshot />
      <ExperienceTimeline />
      <MobileExperienceTimeline />
      <CTA />
      <Footer />
    </main>
  );
}