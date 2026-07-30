import Navbar from '@/components/layout/Navbar';
import About from '@/components/pages/About';
import Certifications from '@/components/pages/Certifications';
import Contact from '@/components/pages/Contact';
import Education from '@/components/pages/Education';
import Footer from '@/components/pages/Footer';
import Projects from '@/components/pages/Projects';
import TechSkills from '@/components/pages/TechSkills';
import Terminal from '@/components/pages/Terminal'
import ScrollDesktop from '@/components/ui/ScrollDesktop';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full bg-neutral-950 text-neutral-100">
        <Navbar />
        <ScrollDesktop />
        <Terminal />
        <About />
        <TechSkills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
