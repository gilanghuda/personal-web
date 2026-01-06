import { motion } from "framer-motion";
import Link from "next/link";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

import About from "./about";
import Work from "./work";
import Services from "./services";
import Testimonials from "./testimonials";
import Contact from "./contact";

const Home = () => {
  return (
    <div className="bg-primary/95 h-screen relative overflow-hidden">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-10">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hello Its me again{" "}
            <br/>
            <span className="text-accent">Gilang Fachrul Huda</span>
          </motion.h1>

          {/* subtitle */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 text-base font-medium md:text-sm">
              Informatics Engineering student passionate about crafting comprehensive
              solutions as a Full-Stack Developer. My expertise lies in Backend,
              Frontend, Mobile, and DevOps.
            </p>
            <div className="mt-8 flex items-center justify-center xl:justify-start gap-4">
              <Link
                href="/about"
                className="flex items-center rounded-lg border-2 border-solid border-white/80 p-2.5 px-6 text-lg font-semibold capitalize text-white/80 hover:border-accent hover:bg-accent hover:text-primary transition-all duration-300 md:p-2 md:px-4 md:text-base"
              >
                Get To Know Me
              </Link>
              <Link
                href="/work"
                className="flex items-center rounded-lg border-2 border-solid border-accent bg-accent p-2.5 px-6 text-lg font-semibold capitalize text-primary hover:bg-transparent hover:text-accent transition-all duration-300 md:p-2 md:px-4 md:text-base"
              >
                projects
              </Link>
            </div>
          </motion.div>
        
        </div>
      </div>

      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-90 lg:-bottom-24 lg:right-[3%] w-[300px] lg:w-[750px]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <main className="scroll-smooth">
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="work" className="bg-primary/85 min-h-screen">
        <Work />
      </section>

      <section id="services" className="min-h-screen">
        <Services />
      </section>

      <section id="testimonials" className="min-h-screen">
        <Testimonials />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </main>
  );
}
