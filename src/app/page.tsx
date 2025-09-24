import Navbar from "@/app/sections/Navbar"
import Hero from "@/app/sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import AcademicQualification from "./sections/AcademicQualification";
import Certifications from "./sections/Certifications";
import ContactForm from "./sections/Contact";

export default function Home() {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <AcademicQualification />
    <Certifications />
    <ContactForm />
  </div>
}
