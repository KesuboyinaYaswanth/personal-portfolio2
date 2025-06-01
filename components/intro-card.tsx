"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export default function IntroCard() {
  const [Open, setOpen] = useState(true);
  const roles = [
    "Full Stack Developer Web",
    "Full Stack Developer Mobile",
    "Web Developer",
    "Design Engineer",
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {Open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
              filter: "blur(20px)",
              rotateX: -15,
              transformPerspective: 1000,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              rotateX: 0,
              transformPerspective: 1000,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
              filter: "blur(20px)",
              rotateX: -15,
              transformPerspective: 1000,
            }}
            transition={{
              duration: 1,
              ease: [0.19, 1, 0.22, 1],
              filter: { duration: 0.8, ease: "easeOut" },
            }}
            className="bg-black rounded-lg p-3 w-full max-w-xl shadow-custom"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                filter: { duration: 0.4, delay: 0.4 },
              }}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  filter: { duration: 0.4, delay: 0.6 },
                }}
                className="flex justify-start items-start w-full"
              >
                <Image
                  src="/banner.jpeg"
                  alt="banner_image"
                  width={1000}
                  height={1000}
                  className="rounded-lg w-full h-auto object-cover object-center"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative flex justify-start items-start w-full mt-[-35px] z-10 px-4"
              >
                <div className="flex justify-between items-end w-full">
                  <div className="flex items-end">
                    <Image
                      src="/favicon.jpeg"
                      alt="profile_image"
                      width={100}
                      height={100}
                      className="rounded-full w-24 h-24 object-cover object-center border-3 border-black"
                    />
                    <div className="flex flex-col items-start justify-end ml-4">
                      <div className="flex items-center justify-between w-full gap-2">
                        <div className="flex items-center justify-start gap-2">
                          <h1 className="text-white text-2xl font-bold">
                            Arpit Chaudhary
                          </h1>
                          <Image
                            src={"/badge.png"}
                            alt="verified_badge"
                            width={100}
                            height={100}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <p className="text-neutral-400 text-sm">@git_cuber</p>
                        <motion.div
                          layout
                          className="flex items-center bg-neutral-800 rounded-lg px-2 py-1 border border-neutral-700 inner-shadow"
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <motion.h1
                            key={currentRoleIndex}
                            initial={{
                              opacity: 0,
                              filter: "blur(10px)",
                              width: "auto",
                            }}
                            animate={{
                              opacity: 1,
                              filter: "blur(0px)",
                              width: "auto",
                            }}
                            exit={{
                              opacity: 0,
                              filter: "blur(10px)",
                              width: "auto",
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="text-neutral-400 text-xs whitespace-nowrap"
                          >
                            {roles[currentRoleIndex]}
                          </motion.h1>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-neutral-800 rounded-full p-2 hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      <Link
                        href="https://github.com/gitcuber369"
                        target="_blank"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <IconBrandGithub className="size-4 text-white" />
                        </motion.div>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-neutral-800 rounded-full p-2 hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      <Link href="https://x.com/git_cuber" target="_blank">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <IconBrandX className="size-4 text-white" />
                        </motion.div>
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-neutral-800 rounded-full p-2 hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                      <Link
                        href="https://www.linkedin.com/in/gitcuber/"
                        target="_blank"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <IconBrandLinkedin className="size-4 text-white" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-8 w-full"
            >
              <div className="relative w-full flex justify-between items-center mb-6 px-4">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-neutral-400 text-2xl font-serif">"</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-neutral-300 text-sm font-medium tracking-wide">
                      Making things possible with code
                    </p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-neutral-700 to-transparent mt-1.5" />
                  </div>
                </motion.div>
                <motion.a
                  href="https://cal.com/gitcuber"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800/50 rounded-md border border-neutral-700/50 hover:bg-neutral-800 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-center w-4 h-4 text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
                    Schedule a meeting
                  </span>
                </motion.a>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="p-4 rounded-lg border border-neutral-700/50 shadow-xl"
              >
                <GitHubCalendar
                  username="gitcuber369"
                  year={new Date().getFullYear()}
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={15}
                  blockMargin={4}
                  style={{
                    minHeight: "120px",
                    maxWidth: "100%",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
