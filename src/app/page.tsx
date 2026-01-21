import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { Features } from "@/components/sections/features";
import { Timeline } from "@/components/sections/timeline";
import { MVPBanner } from "@/components/sections/mvp-banner";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 relative">
      <div className="relative pt-20 pb-20 overflow-hidden">
        <RetroGrid />
        <div className="relative z-10">
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
