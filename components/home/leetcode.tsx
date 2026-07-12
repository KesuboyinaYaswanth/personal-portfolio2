"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Leetcodecalendar } from "react-leetcode-calendar";
import Container from "../container";

const Leetcode = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== "undefined")
      return document.documentElement.classList.contains("dark");
    return false;
  });

  useEffect(() => {
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
        className="relative -right-px col-start-2 row-span-full row-start-1 border-x-[color:var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed h-10 w-full pointer-events-none border-y border-border/15 dark:border-border"
      />
      <Container className="px-6 w-full my-4">
        <div className="flex flex-row gap-4 items-center justify-between">
          <div className="flex flex-row gap-2">
            <h1 className="font-['condensed'] font-semibold text-3xl dark:text-white text-neutral-800">
              LeetCode Submissions
            </h1>
            <p className="text-neutral-500 mt-1 text-xl">@YaswanthKesuboyina</p>
          </div>

          <Link
            href="https://leetcode.com/YaswanthKesuboyina/"
            className="flex items-center gap-2 bg-cardColor text-white px-3 py-1 rounded-md text-xs"
          >
            View Profile
          </Link>
        </div>

        <div className="mt-4">
          <Leetcodecalendar
            username="YaswanthKesuboyina"
            size="large"
            colors={{
              noActivity: "#000000",
              activity: ["#131313", "#323232", "#505050", "#8a8a8a", "#c0c0c0"],
              text: "#ffffff",
              title: "#ffffff",
              months: "#ffffff",
              weekdays: "#ffffff",
              totalCount: "#ffffff",
              legend: "#ffffff",
              background: "#000000",
              calendarBackground: "#0a0a0a",
              border: "#ffffff",
              hover: "#ffffff",
              loading: "#ffffff",
              error: "#ff0000",
              noData: "#ffffff",
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Leetcode;
