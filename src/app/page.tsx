import Navbar from "@/app/sections/Navbar"
import Hero from "@/app/sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

export default function Home() {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
  </div>
}
