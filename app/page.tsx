import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-2xl text-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px5 min-h-screen">
      <div className="max-w-7xl w-full">

          <FloatingNav navItems={[
            {name: 'Home', link: '/', icon:<FaHome/>}
          ]}/>

          <Hero/>

          <Technologies/>

          <Projects/>
      </div>
    </main>
  );
}
