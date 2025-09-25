"use client";

import React, { useEffect, useState } from "react";
import { twMerge as cn } from "tailwind-merge";
import { CometCard } from "@/components/comet-card";
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
    <CometCard className="my-5 w-80 md:my-10">
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

        <div className="text-end mt-5 text-gray-300 opacity-50">View →</div>
      </Link>
    </CometCard>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    image: string;
    href: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-7",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
            <MakeCard key={idx} item={item}/>
        ))}
      </ul>
    </div>
  );
};
