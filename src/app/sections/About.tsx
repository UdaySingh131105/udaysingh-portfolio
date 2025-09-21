"use client";

import { useRef } from "react";
import Card from "@/components/Card"
import { Globe } from "@/components/Globe";

export default function About() {
  const grid2Container = useRef<HTMLDivElement | null>(null);
  // bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800

  return (
    <section id="about" className="relative min-h-screen px-6 py-10 flex flex-col items-center justify-center">
      <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-center">
        About Me
      </h2>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-5 auto-rows-[14rem] w-full max-w-7xl p-4 md:p-10 z-10">
        {/* Grid 1 - Intro */}
        <div className="relative flex items-end bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 overflow-hidden col-span-2 md:col-span-3 row-span-1 md:row-span-2 group shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img
                src="/assets/coding-pov.png"
                alt="Coding POV"
                className="absolute scale-[1.25] md:scale-[2] lg:scale-[1.5] -right-[7rem] -top-[5rem] lg:-top-[5rem] transition-transform duration-700 ease-in-out group-hover:scale-[1.7] filter brightness-90 dark:brightness-75"
                />
            </div>

            <div className="relative z-10 space-y-4 p-6 rounded-xl">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-yellow-100 bg-clip-text text-transparent">Hi, I&apos;m Uday Singh</p>
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed font-medium">
                  A passionate developer who enjoys building scalable applications and experimenting with new ideas to solve real-world problems using blockchain, AI, and cloud technologies.
                </p>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-indigo-500/30 via-purple-500/20 to-transparent rounded-b-2xl" />
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Grid 2 - Skills as Cards */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-900 dark:via-gray-800 dark:to-black rounded-2xl col-span-2 md:col-span-2 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700/50">
          <div
            ref={grid2Container}
            className="relative w-full h-full flex items-center justify-center"
          >
            <p className="absolute text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-600/30 to-gray-400/30 bg-clip-text text-transparent pointer-events-none z-0 select-none text-center">
              CODE IS CRAFT
            </p>

            <Card
              style={{ rotate: "-10deg", top: "20%", left: "10%" }}
              text={"Blockchain"}
              containerRef={grid2Container}
           />
           <Card 
              style={{ rotate: "15deg", top: "50%", left: "35%" }}
              text={"Design Patterns"}
              containerRef={grid2Container}
           />
            <Card
              style={{ rotate: "-40deg", top: "15%", left: "55%" }}
              text={"Next.js"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-50deg", top: "60%", left: "15%" }}
              text={"SOLID Principles"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "60%", left: "15%" }}
              image={"/assets/logos/csharp-pink.png"}
              containerRef={grid2Container}
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        {/* Grid 3 - Location */}
        <div className="relative bg-gray-500/10 text-white rounded-2xl p-4 col-span-2 md:col-span-2 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700/30 group">
          <div className="relative z-10 w-full md:w-[70%] space-y-3">
            <p className="text-xl font-bold">Time Zone</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              I&apos;m based in India (IST) and open to remote collaborations
              worldwide.
            </p>
          </div>
          {/* Refactored figure element for responsiveness */}
          <figure className="absolute left-[30%] top-[20%] size-[100%]">
            <Globe />
          </figure>
          
        </div>

        {/* Grid 4 - Contact */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white rounded-2xl flex items-center justify-center col-span-2 p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
          <div className="flex flex-col items-start justify-center gap-4 size-full">
            <p className="text-center">Do you want to start a project together?</p>
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 col-span-2 md:col-span-3 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700/30 group">
          <div className="relative z-10 w-[70%] space-y-4">
            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Tech Stack</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              I specialize in blockchain (Ethereum, Hardhat, Solidity), AI/ML
              with Python, and modern frameworks like Next.js and Tailwind.
            </p>
            
            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">React</span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Next.js</span>
              <span className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">Node.js</span>
              <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30">Python</span>
            </div>
          </div>
          
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 md:scale-125 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            {/* Placeholder for Frameworks component */}
            <div className="w-full h-full bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-tl-3xl flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-600/30">⚡</div>
            </div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
}