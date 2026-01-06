import { useState, useEffect } from "react";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "#home", Icon: HiHome },
  { name: "about", path: "#about", Icon: HiUser },
    { name: "work", path: "#work", Icon: HiViewColumns },
  { name: "services", path: "#services", Icon: HiRectangleGroup },
  {
    name: "testimonials",
    path: "#testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "#contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const [activeHash, setActiveHash] = useState("#home");

  // smooth scroll animation
  const smoothScroll = (targetId) => {
    const element = document.querySelector(targetId);
    if (!element) return;

    const targetPosition = element.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second smooth scroll
    let start = null;

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // scroll spy - detect mana section yang visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = navData.map((item) => ({
        id: item.path,
        element: document.querySelector(item.path),
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveHash(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle navbar click dengan smooth scroll
  const handleNavClick = (e, path) => {
    e.preventDefault();
    setActiveHash(path);
    smoothScroll(path);
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <a
            className={`${
              activeHash === link.path && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            onClick={(e) => handleNavClick(e, link.path)}
            key={i}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
