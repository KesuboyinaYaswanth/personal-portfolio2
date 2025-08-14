"use client";
import IntroCard from "@/components/intro-card";
import React, { useEffect, useState } from "react";
import { GitcuberEffect } from "@/components/apple-hello-effect";
import { AnimatePresence, motion } from "motion/react"; // add for exit animation

function page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setShowSplash(false), 6000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <GitcuberEffect />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <IntroCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default page;
