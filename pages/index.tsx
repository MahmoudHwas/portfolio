import Hero from "@/Components/Hero";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import React, { useEffect, useState } from "react";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Testimonial from "@/Components/Testimonial";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";
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