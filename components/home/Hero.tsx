"use client";

import { IconRotateClockwise } from "@tabler/icons-react";
import { useState } from "react";
import { GitcuberEffect } from "../apple-hello-effect";
import Container from "../container";

const Hero = () => {
  const [effectKey, setEffectKey] = useState(0);

  return (
    <div className="w-full mt-8">
      <Container className="items-center justify-center flex flex-col h-[30vh] border-border/15">
        <div className="relative flex items-center justify-center overflow-hidden w-full h-full bg-zinc-300/15 dark:bg-zinc-900/15">
          <button
            className="group absolute top-8 right-4 bg-primary text-white py-2 px-2 rounded-sm  bg-white dark:bg-zinc-900 flex items-center justify-center z-10 hover:dark:bg-zinc-800 transition duration-300  inset-shadow-[0px_1px_0px_,0px_0px_0px] inset-shadow-white/10"
            onClick={() => setEffectKey((k) => k + 1)}
          >
            <IconRotateClockwise className="inline-block size-4 transition duration-300 w-full group-hover:rotate-180 text-background dark:text-secondary " />
          </button>
          <GitcuberEffect key={effectKey} className="size-95" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
