import { InfiniteMovingCards } from "@/components/infinite-moving-3d-card";
import { certificates, skillBadges } from "@/lib/constants";

export default function Certifications() {
  return (
    <div className="relative w-full overflow-clip p-5">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-center">Certifications & Skill Badges</h2>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={certificates} direction="right" speed="slow" />
      </div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skillBadges} direction="left" speed="slow" />
      </div>
    </div>
  );
}