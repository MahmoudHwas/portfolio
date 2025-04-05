import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import React, { useEffect, useState } from "react";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 800,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Hero />
      <div className="relative z-[30]">
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;