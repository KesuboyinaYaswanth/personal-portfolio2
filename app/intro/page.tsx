"use client";

import { GitcuberEffect } from "@/components/apple-hello-effect";
import { useState } from "react";
function Intro() {
  const [showName, setShowName] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-0">
      <GitcuberEffect
        className="h-36 mx-auto"
        speed={3}
        onAnimationComplete={() => setShowName(true)}
      />
    </div>
  );
}

export default Intro;
