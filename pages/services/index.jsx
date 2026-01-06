import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
// import ServiceSlider from "../../components/ServiceSlider";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div ref={ref} id="services" className="relative min-h-screen bg-primary/80 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              As a full-stack developer, I offer services in backend, frontend, mobile, and DevOps to deliver comprehensive solutions.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
