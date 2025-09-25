import { Project } from "@/components/Project";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center px-5 sm:px-15 py-5 gap-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent text-center">My Projects</h2>
            <Project />
        </section>
    )
}