import HeroText from "@/components/HeroText";
import ParallaxBackground from "@/components/ParrallexBackground";

export default function Hero() {
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden p-2">
                <HeroText />
                <ParallaxBackground />
        </section>
    )
}