import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import GithubStats from '@/components/GithubStats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-[#080c14] min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
