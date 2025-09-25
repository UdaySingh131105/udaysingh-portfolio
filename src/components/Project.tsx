"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { myProjects } from "@/lib/constants";
import { useMediaQuery } from "react-responsive";

export function Project() {
  const [project, setProject] = useState<(typeof myProjects)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const id = useId();

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProject(null); 
      }
    }

    document.body.style.overflow = project ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project]);

  useOutsideClick(ref, () => setProject(null));

  return (
    <>
      {/* Background overlay */}
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="fixed inset-0 bg-black/30 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded modal */}
      <AnimatePresence>
        {project ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Close Button */}
            <motion.button
              key={`button-${project.title}-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-3 right-3 lg:hidden flex items-center justify-center bg-white rounded-full p-2 shadow-md"
              onClick={() => setProject(null)}
            >
              <CloseIcon />
            </motion.button>

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              ref={ref}
              variants={fadeScale}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-[80%] md:w-[65%] h-[85%] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-x-hidden shadow-lg"
            >
              {/* Image */}
              <motion.div layoutId={`image-${project.title}-${id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 md:h-80 sm:rounded-t-3xl object-cover object-top"
                />
              </motion.div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-4 py-2 gap-4">
                <div className="flex justify-between items-center p-4">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="font-bold text-lg text-neutral-700 dark:text-neutral-200"
                  >
                    {project.title}
                  </motion.h3>

                  {project.links && project.links.length > 0 &&  (
                    <div className="flex gap-2">
                      {project.links.map((link, i) => (
                        <motion.a
                          layoutId={`button-${project.title}-${i}`}
                          key={i}
                          href={link.url}
                          target="_blank"
                          className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black transition-colors"
                        >
                          {link.name}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub Description */}
                <div className="px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm lg:text-base max-h-60 md:max-h-80 overflow-y-auto dark:text-neutral-400"
                  >
                    {project.subDescription && <p>{project.subDescription}</p>}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Project Cards */}
      <div className="flex flex-col items-center justify-center w-full gap-5">
        {myProjects.map((project) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={`card-${project.title}-${id}`}
            onClick={() => setProject(project)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer w-full shadow-sm"
          >
            <div className="flex gap-4 flex-col md:flex-row w-full justify-start items-center md:items-start">
              <motion.div layoutId={`image-${project.title}-${id}`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-[250px] w-[500px] md:h-24 md:w-24 rounded-lg object-cover object-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${project.title}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {project.description}
                </motion.p>
              </div>
            </div>
            {!isMobile && (
              <motion.button
                layoutId={`button-${project.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 transition-colors"
              >
                View
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black cursor-pointer"
  >
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);
