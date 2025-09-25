"use client";
import { FlipWords } from "./flip-words";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroText() {
    const flipWords = ["Secure", "Modern", "Scaleable"];

    return (
        <div className="z-10 mt-20 text-center md:ml-20 lg:mt-40 md:mt-20 md:text-left rounded-3xl bg-clip-text p-4">
            <AnimatePresence>
                {/* Desktop View */}
                <motion.div
                    key="desktop"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="flex-col hidden md:flex c-space"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl text-neutral-200"
                    >
                        Hi, I&apos;m Uday
                    </motion.h1>
                    <div className="flex flex-col item-start">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl font-medium text-neutral-200"
                        >
                            A Developer <br /> Dedicated to Crafting
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <FlipWords
                                words={flipWords}
                                className="font-black text-white text-8xl"
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="text-4xl font-medium text-neutral-200"
                        >
                            Real World Solutions
                        </motion.p>
                    </div>
                </motion.div>

                {/* Mobile View */}
                <motion.div
                    key="mobile"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col space-y-2 md:hidden"
                >
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-medium text-white"
                    >
                        Hi, I&apos;m Uday
                    </motion.p>

                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-5xl font-black text-white"
                        >
                            Building
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <FlipWords
                                words={flipWords}
                                className="text-7xl text-white font-bold"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="font-black text-4xl text-white"
                        >
                            Web Applications
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
