"use client";

import { IconBrandGithubCopilot } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import Container from "../container";

const Github = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== "undefined")
      return document.documentElement.classList.contains("dark");
    return false;
  });

  useEffect(() => {
    // Update calendar only when the toggler dispatches the 'theme-toggle' event
    const handler = (e: any) => {
      if (e?.detail && typeof e.detail.isDark === "boolean") {
        setIsDark(e.detail.isDark);
      } else {
        setIsDark(document.documentElement.classList.contains("dark"));
      }
    };
    document.addEventListener("theme-toggle", handler as EventListener);
    return () =>
      document.removeEventListener("theme-toggle", handler as EventListener);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={
          "relative -right-px col-start-2 row-span-full row-start-1 border-x-[color:var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed h-10 w-full pointer-events-none border-b border-border/15 dark:border-border"
        }
      />
      {/* <FlickeringGrid
        className="relative inset-0 z-0 border-border/15 dark:border-border"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={50}
       
      /> */}

      <Container className="px-6 w-full my-4">
        <div className="flex flex-row gap-4 items-center justify-between">
          <div className="flex flex-row gap-2">
            <h1 className="font-semibold text-3xl dark:text-white text-neutral-800">
              Contributions
            </h1>
            <p className="text-neutral-500 mt-1 text-xl">@KesuboyinaYaswanth</p>
          </div>
          <Link
            href="https://github.com/KesuboyinaYaswanth"
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0 bg-cardColor text-white hover:bg-cardColorForeground py-4 shadow-premium h-6 px-3 text-xs hover:text-brand font-['Manrope']"
          >
            <IconBrandGithubCopilot className="text-neutral-500" />
            <p className="font-['Manrope'] dark:text-white text-black font-semibold">
              Github
            </p>
          </Link>
        </div>
        <div className="flex mt-4 font-['Manrope'] font-medium text-neutral-500">
          <GitHubCalendar
            username="KesuboyinaYaswanth"
            colorScheme={isDark ? "dark" : "light"}
            theme={{
              light: ["#e5e7eb", "#64748b", "#64748b", "#64748b", "#334155"],
              dark: ["#0b0f1a", "#334155", "#1e293b", "#334155", "#334155"],
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Github;
