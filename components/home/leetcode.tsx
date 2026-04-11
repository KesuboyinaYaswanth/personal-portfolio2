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
      <Container className="px-6 w-full my-4">
        <div className="flex flex-row gap-4 items-center justify-between">
          <div className="flex flex-row gap-2">
            <h1 className="font-semibold text-3xl dark:text-white text-neutral-800">
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
              noActivity: "#1a1a1a",
              activity: ["#0b0f1a", "#334155", "#1e293b", "#334155", "#334155"],
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
