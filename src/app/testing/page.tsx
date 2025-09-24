"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { InfiniteMovingCards } from "@/components/infinite-moving-3d-card";
import { certificates, skillBadges } from "@/lib/constants";

// ✅ Capitalized component
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
          >View Skill Badge →</CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skillBadges} direction="right" speed="slow" />
      </div>

      <div className="flex mt-10">
        <MakeCard item={skillBadges[0]} />
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skillBadges} direction="right" speed="normal" />
      </div>
      </div>

      <div className="w-full">
        <InfiniteMovingCards items= {certificates} direction="left" speed="fast" />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
