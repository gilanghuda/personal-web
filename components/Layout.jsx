import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
      {/* metadata */}
      <Head>
        <title>Gilang Huda | Portfolio</title>
        <meta
          name="description"
          content="Gilang Huda is a Full-stack web developer"
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Gilang Fachrul Huda" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <main
        className={`scroll-smooth bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />

        {/* main content */}
        {children}
      </main>
    </>
  );
};

export default Layout;
