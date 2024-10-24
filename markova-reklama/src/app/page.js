import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto bg-hero-pattern bg-contain">
      <div className="container mx-auto px-12 py-4 ">
        <HeroSection />
        <About/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </main>
  );
}
