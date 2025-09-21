import HeroText from "@/components/HeroText";
import ParallaxBackground from "@/components/ParrallexBackground";
import Astronaut from "@/components/AstronautScene"

export default function Hero() {
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen p-2">
                <HeroText />
                <ParallaxBackground />
                <figure className="absolute inset-0 h-full w-full">
                    <Astronaut />
                </figure>
        </section>
    )
}