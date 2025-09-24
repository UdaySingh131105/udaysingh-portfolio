"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";

type MakeCardProps = {
  item: {
    title: string;
    image: string;
    href: string;
  };
};

const MakeCard: React.FC<MakeCardProps> = ({ item }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
        <CardItem
          as="h2"
          translateZ={20} 
          className="text-lg font-semibold text-neutral-600 dark:text-white"
        >
          {item.title}
        </CardItem>
        <CardItem
          translateZ={50}
          className="w-full mt-4"
        >
          <img 
            src={item.image}
            alt={`${item.title} Badge`} 
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-10">
          <CardItem
            translateZ={20}
            as={"a"}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 text-black transition-colors"
          >View →</CardItem>
        </div>
      </CardBody>
    </CardContainer>
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
      className={twMerge(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
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
