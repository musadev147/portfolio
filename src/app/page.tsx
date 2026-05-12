"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingOverlay from "@/components/LoadingOverlay";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBg from "@/components/AnimatedBg";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", !dark);
  }, [dark]);

  // Intersection observer for fade-up animations
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  // Skill bar animation
  useEffect(() => {
    if (!loaded) return;
    const fills = document.querySelectorAll<HTMLElement>(".skill-fill");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate"); }),
      { threshold: 0.3 }
    );
    fills.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <>
      <LoadingOverlay loaded={loaded} />
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBg />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
