"use client";

import { useEffect, useState } from "react";
import { GitcuberEffect } from "../apple-hello-effect";
import Container from "../container";

const Hero = () => {
  const [effectKey, setEffectKey] = useState(0);

  // wallpaper sources (from public/wallpapers)
  const wallpapers = [
    "/wallpapers/1.jpg",
    "/wallpapers/11.jpg",
    "/wallpapers/15.jpg",
    "/wallpapers/19.jpg",
    "/wallpapers/58.jpg",
    "/wallpapers/7.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // preload images
  useEffect(() => {
    wallpapers.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // cycle wallpapers every 10s
  useEffect(() => {
    if (wallpapers.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % wallpapers.length);
    }, 10000);
    return () => clearInterval(id);
  }, [wallpapers.length]);

  return (
    <div className="w-full">
      <Container className="items-center justify-center flex flex-col h-[30vh] bg-white/5 dark:bg-black/5 rounded-br-lg rounded-bl-lg overflow-hidden relative ">
        <div className="relative flex items-center justify-center overflow-hidden w-full h-full">
          {/* Background slideshow (absolute stacked layers) */}
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              // mask: fully visible at the top (opacity 100%) and
              // linearly fade to transparent at the bottom
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
            }}
          >
            {wallpapers.map((src, i) => (
              <div
                key={src}
                aria-hidden
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-linear ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            {/* subtle tint + top/bottom fade to match light/dark backgrounds */}
            <div className="absolute inset-0 pointer-events-none">
              {/* subtle tint to reduce contrast */}
              <div className="absolute inset-0 bg-black/6 dark:bg-black/20" />
              {/* top-to-bottom blend: light mode -> fade to white at edges; dark mode -> fade to black at edges */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-transparent to-white/60 dark:from-black/40 dark:via-transparent dark:to-black/40" />
            </div>
          </div>

          {/* content */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <GitcuberEffect key={effectKey} className="size-95" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
