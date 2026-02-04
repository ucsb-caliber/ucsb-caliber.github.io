import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { Features } from "@/components/sections/features";
import { Timeline } from "@/components/sections/timeline";
import { MVPBanner } from "@/components/sections/mvp-banner";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 relative">
      <div className="relative overflow-hidden pt-32 pb-32 md:pt-48 md:pb-48">
        <RetroGrid className="opacity-20" />
        <div className="relative z-10 text-center">
          <Hero />
        </div>
      </div>
      <Features />
      <Timeline />
      <MVPBanner />
      <Credibility />
    </div>
  );
}
