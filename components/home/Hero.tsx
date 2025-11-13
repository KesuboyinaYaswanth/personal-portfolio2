"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconBrandX,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
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
      const img = new window.Image();
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
    <div className="w-full border-b dark:border-border border-border/15 ">
      <div className="w-full">
        <Container className="items-center justify-center flex flex-col h-[30vh] bg-white/5 dark:bg-black/5 overflow-hidden relative">
          <div className="relative flex items-center justify-center overflow-hidden w-full h-full">
            {/* Background slideshow (absolute stacked layers) */}
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                // mask: fully visible at the top (opacity 100%) and
                // linearly fade to transparent at the bottom
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
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
                <div className="absolute inset-0 pointer-events-none " />
              </div>
            </div>

            {/* content */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <GitcuberEffect key={effectKey} className="size-80" />
            </div>
          </div>
        </Container>
        <div className="relative mx-6 flex gap-4 flex-col justify-between">
          {/* Profile image and name aligned vertically center */}
          <img
            src="/profile.jpg"
            alt="profile picture"
            className="size-28 rounded-full -mt-12"
          />
          <div className="text-left flex flex-row items-center gap-3 justify-between w-full">
            <div className="flex flex-row gap-3 items-center">
              <h1
                style={{ fontFamily: "var(--font-instrument-serif)" }}
                className="text-4xl font-semibold text-black dark:text-white"
              >
                Arpit Chaudhary
              </h1>
              <div className="text-center flex justify-center items-center">
                <Tooltip>
                  <TooltipTrigger>
                    <IconRosetteDiscountCheckFilled
                      size={20}
                      className="text-blue-400"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="text-center dark:text-white">
                    <span>Verified</span>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <a
              href="https://x.com/messages/compose?recipient_id=1737091389366644736"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a direct message on X"
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-cardColor text-white hover:bg-cardColorForeground py-4 shadow-premium h-6 px-3 text-xs hover:text-brand"
            >
              <IconBrandX className="text-neutral-500" />
              <span className="font-['Manrope'] text-white font-semibold">
                Twitter DM
              </span>
            </a>
          </div>

          <div className="pb-4 max-w-3xl">
            <div className="space-y-3">
              <p className="text-sm text-left text-neutral-700 dark:text-neutral-300 font-['Manrope'] leading-snug tracking-tight">
                React Native–focused mobile engineer crafting fast, accessible,
                and polished apps for iOS and Android. Pragmatic with
                Swift/SwiftUI, Kotlin, and React Native—choosing what delivers
                the best experience. Partnered with{" "}
                <span className="inline-block font-semibold text-black dark:text-white">
                  5+ freelance clients
                </span>{" "}
                and shipped production apps published on the{" "}
                <span className="inline-block font-semibold text-black dark:text-white">
                  App Store
                </span>{" "}
                and{" "}
                <span className="inline-block font-semibold text-black dark:text-white">
                  Play Store
                </span>{" "}
                . Focused on performance, delightful micro‑interactions, and
                clean, testable architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
