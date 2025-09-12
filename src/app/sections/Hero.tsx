import HeroText from "@/components/HeroText";
import ParallaxBackground from "@/components/ParrallexBackground";
import Astronaut from "@/components/AstronautScene"

export default function Hero() {
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden p-2">
                <HeroText />
                <ParallaxBackground />
                <figure className="absolute inset-0" style={{width: "100vw", height: "100vh`"}}>
                    <Astronaut />
                </figure>
        </section>
    )
}