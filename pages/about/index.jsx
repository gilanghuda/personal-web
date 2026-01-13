import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaDocker,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiGo,
  SiLaravel,
  SiFlutter,
  SiKotlin,
  SiGrafana,
  SiPrometheus,
  SiVuedotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Backend",
        icons: [SiGo, FaJs, FaPython, SiLaravel],
      },
      {
        title: "Front End",
        icons: [SiNextdotjs, SiVuedotjs, SiFlutter, SiKotlin],
      },
      {
        title: "Mobile",
        icons: [SiFlutter, SiKotlin],
      },
      {
        title: "DevOps",
        icons: [FaDocker, SiGrafana, SiPrometheus],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Hology 8.0 - 4th Place",
        stage: "September - October 2025",
        description:
          "Ranked 4th out of 60 teams. Developed Qnectify, an AI-powered learning platform with automated quiz generation and gamification.",
      },
      {
        title: "Hackathon Raion HackJam - 2nd Place",
        stage: "August 2025",
        description:
          "Developed Medivine, an AI-based mobile app for early symptom detection and private medical consultations in one week.",
      },
      {
        title: "Hology 7.0 - 3rd Place",
        stage: "September - October 2024",
        description:
          "Secured 3rd Place out of 75 teams. Developed BAGASI, a platform connecting breast milk donors and recipients.",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Poros, DevOps Engineer",
        stage: "March 2025 - December 2025",
        description:
          "Developed the backend system for the Poros web platform, ensuring reliability and scalability. Automated deployments with CI/CD pipelines to speed releases and reduce manual effort. Monitored system performance and optimized server configuration to enhance stability and response time.",
        icons: [FaDocker, SiGrafana, SiPrometheus],
      },
      {
        title: "Raion, App Programmer",
        stage: "February 2025 - December 2025",
        description:
          "Developed mobile applications with a focus on clean architecture and responsive UI. Collaborated with designers to deliver seamless and user-friendly features. Mentored 40+ participants in Raion Academy, providing guidance on mobile development best practices and project execution.",
        icons: [SiFlutter, SiKotlin, FaReact],
      },
      {
        title: "Object Oriented Programming Laboratory Assistant",
        stage: "January 2025 - July 2025",
        description:
          "Served as an Object Oriented Programming Laboratory Assistant, guiding and supporting over 40 students enrolled in OOP courses. Assisted in establishing practical meetings, courses, and hands-on exercises focused on OOP concepts and implementation.",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Informatics Engineering - Universitas Brawijaya",
        stage: "2023 - Present",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      id="about"
      className="relative min-h-screen bg-primary/90 py-32 text-center xl:text-left"
    >
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex absolute bottom-0 -left-[200px] scale-110 z-20"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="h2"
          >
            Aspiring <span className="text-accent">developer</span> crafting
            digital solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a 3rd-year Informatics Engineering student at the Faculty of
            Computer Science, Universitas Brawijaya. Passionate about technology
            and software development, I am constantly learning and building
            projects to hone my skills.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />rd
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year student.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col max-w-max gap-x-2 items-center xl:items-start text-center xl:text-left text-white/60"
              >
                {/* title */}
                <div className="font-light">{item.title}</div>
                <div className="text-sm mb-2">{item.stage}</div>
                {item.description && (
                  <div className="text-xs leading-relaxed max-w-[400px] mb-2">
                    {item.description}
                  </div>
                )}

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
