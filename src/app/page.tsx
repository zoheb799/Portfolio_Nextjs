"use client"
import { useState, useEffect } from "react";
import Homepage from "@/pages/Homepage";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/Loading";
import About from "@/pages/About";
import "./globals.css";


export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return isLoading ? (
    <LoadingScreen progress={loadingProgress} />
  ) : (
    <div className="  relative z-0  scroll-smooth">
      <div className="">
        <Navbar />
        <section id="home"><Homepage /></section>
      </div>
      <section id="about"><About /></section>

      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
