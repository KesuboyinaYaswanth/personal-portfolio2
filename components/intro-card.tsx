import Image from "next/image";
import { motion } from "motion/react";

export default function IntroCard() {
  return (
    <div className="bg-black rounded-lg p-3 w-full max-w-xl shadow-custom">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-start items-start w-full">
          <Image
            src="/banner.jpeg"
            alt="banner_image"
            width={1000}
            height={1000}
            className="rounded-lg w-full h-auto object-cover object-center"
          />
        </div>
        <div className="relative flex justify-start items-start w-full mt-[-35px] z-10 px-4">
          <div className="flex justify-end items-end">
            <Image
              src="/favicon.jpeg"
              alt="profile_image"
              width={100}
              height={100}
              className="rounded-full w-24 h-24 object-cover object-center border-3 border-black"
            />
            <div className="flex flex-col items-start justify-start ml-4">
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
              <div className="flex items-center justify-start gap-2">
                <p className="text-neutral-400 text-sm">@git_cuber</p>
                <div className="flex items-center bg-neutral-800 rounded-lg px-2 py-1 border border-neutral-700">
                  <motion.h1 className="text-neutral-400 text-xs">
                    Full Stack Developer
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
