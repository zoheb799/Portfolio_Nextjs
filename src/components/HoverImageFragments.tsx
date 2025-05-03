"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ProfileImage from "../assets/image.jpg";

const gridSize = 4;

const HoverImageFragments = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiles = containerRef.current?.querySelectorAll(".tile");

    const onEnter = () => {
      tiles?.forEach((tile) => {
        gsap.to(tile, {
          x: () => (Math.random() - 0.5) * 100,
          y: () => (Math.random() - 0.5) * 100,
          rotate: () => (Math.random() - 0.5) * 90,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    };

    const onLeave = () => {
      tiles?.forEach((tile) => {
        gsap.to(tile, {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
      });
    };

    const container = containerRef.current;
    container?.addEventListener("mouseenter", onEnter);
    container?.addEventListener("mouseleave", onLeave);

    return () => {
      container?.removeEventListener("mouseenter", onEnter);
      container?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const tileSize = 100 / gridSize;

  return (
    <div
      ref={containerRef}
      className={`relative grid grid-cols-${gridSize} grid-rows-${gridSize} w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-xl`}
    >
      {Array.from({ length: gridSize * gridSize }, (_, i) => {
        const x = (i % gridSize) * tileSize;
        const y = Math.floor(i / gridSize) * tileSize;
        return (
          <div
            key={i}
            className="tile absolute w-full h-full bg-cover bg-center"
            style={{
              width: `${tileSize}%`,
              height: `${tileSize}%`,
              left: `${x}%`,
              top: `${y}%`,
              backgroundImage: `url(${ProfileImage.src})`,
              backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
              backgroundPosition: `-${x}% -${y}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default HoverImageFragments;
