"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "../container";

const Navbar = () => {
  const navItems = [
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "Components", path: "/components" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showName, setShowName] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className="w-full flex border-y border-border fixed mt-2">
      <Container>
        <motion.nav className="max-w-4xl mx-auto flex items-center px-4 py-2 justify-between bg-white dark:bg-background border-x border-border">
          <Image
            className="size-10 rounded-xl border-2 border-border"
            src={"/profile.jpg"}
            alt="Profile"
            height={100}
            width={100}
          />
          <div className="flex items-center">
            {navItems.map((item, idx) => (
              <Link
                href={item.path}
                key={idx}
                className="relative px-2 py-1 text-sm"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="hover-span"
                    className="absolute inset-0 w-full h-full rounded-lg bg-neutral-200 dark:bg-neutral-800"
                  />
                )}

                <span className="relative z-10 dark:text-neutral-50">
                  {item.title}
                </span>
              </Link>
            ))}
            <div className="ml-2">
              <Link
                href={"https://github.com/gitcuber369"}
                className="p-2 flex rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800 transition dark:bg-zinc-900 inset-shadow-[1px_1px_1px,0px_0px_2px] inset-shadow-white/15"
              >
                <IconBrandGithub className="size-4 text-zinc-200" />
              </Link>
            </div>
          </div>
        </motion.nav>
      </Container>
    </div>
  );
};

export default Navbar;
