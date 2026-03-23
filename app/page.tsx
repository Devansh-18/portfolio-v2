import Footer from "./components/Footer";
import DSA from "./components/Home/DSA";
import Hero from "./components/Home/Hero";
import Project from "./components/Home/Projects";
import Skills from "./components/Home/Skills";
import Timeline from "./components/Home/Timeline";
import Navbar from "./components/Navbar";
import Separator from "./components/ui/Seperator";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Separator text={"My Education"} />
      <Timeline />
      <Separator text={"My Skills"} />
      <Skills />
      <Separator text={"Featured Projects"} />
      <Project/>
      <Separator text={"Problem Solving Skills"} />
      <DSA />     
      <Footer />
    </>
  );
}
