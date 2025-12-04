import EduCerts from "@/components/EduCerts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="text-2xl text-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px5 min-h-screen">
      <div className="max-w-7xl w-full">

          <FloatingNav navItems={navItems}/>

          <Hero/>

          <Technologies/>

          <Projects/>

          <EduCerts/>

          <Footer/>
      </div>
    </main>
  );
}
