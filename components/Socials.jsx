import Link from "next/link";

import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/gilang-fachrul-huda",
    Icon: RiLinkedinBoxLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/gilanghuda09",
    Icon: RiInstagramLine,
  },
  {
    name: "Github",
    link: "https://github.com/gilanghuda",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
