import { CometCard } from "@/components/comet-card";
import { InfiniteMovingCards } from "@/components/infinite-moving-3d-card";
import { certificates, skillBadges } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

type MakeCardProps = {
  item: {
    title: string;
    image: string;
    href: string;
  };
};

const MakeCard: React.FC<MakeCardProps> = ({ item }) => {
  return (
    <CometCard className="my-10 w-80 md:my-20">
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border border-gray-700 p-2 md:p-4"
        style={{ transformStyle: "preserve-3d" }}
        aria-label={`View ${item.title}`}
      >
        <div className="text-lg font-medium h-[70px] w-full">
          {item.title}
        </div>
        {/* Image Section */}
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-square w-[300px] h-[320px]">
            <Image
              width={320}
              height={240}
              loading="lazy"
              className="absolute inset-0 rounded-[16px] h-full w-full object-fit"
              alt={`${item.title} Badge`}
              src={item.image}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              }}
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-end mt-5 text-gray-300 opacity-50">View →</div>
      </Link>
    </CometCard>
  );
};


export default function Page() {
  return (
    <>
    <div className="relative w-full overflow-clip p-5">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-center">Certifications & Skill Badges</h2>
      <div className="h-[30rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={certificates} direction="right" speed="normal" />
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div className="flex flex-row items-center justify-center gap-10 p-5">
      <MakeCard item={skillBadges[0]} />

      <MakeCard item={certificates[0]} />
    </div>
    </>
  );
}