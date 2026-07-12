import Image from "next/image";
import { TECH_STACK } from "../../data/tech-stack";
import Container from "../container";

const TechStack = () => {
  return (
    <>
      {/* Top Pattern */}
      <div
        aria-hidden
        className="relative -right-px col-start-2 row-span-full row-start-1 border-x-[color:var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed h-10 w-full pointer-events-none border-y border-border/15 dark:border-border"
      />

      <Container className="px-6 w-full my-4 mb-32">
        {/* Heading */}
        <div className="flex">
          <h1 className=" font-semibold text-3xl text-neutral-800 dark:text-white">
            My Tech Stack
          </h1>
        </div>

        {/* Stack Card */}
        <div className="mt-8 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm">
          <p className="text-neutral-700 dark:text-neutral-300 mb-6">
            These are the technologies I use to build modern web applications,
            solve coding problems, and develop AI/ML projects.
          </p>

          <div className="flex flex-wrap items-center gap-1">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.key}
                className="flex items-center justify-center p-1 hover:scale-110 transition-transform"
              >
                <Image
                  src={`/icons/${tech.icon}`}
                  alt={tech.title}
                  width={32}
                  height={32}
                  unoptimized
                />

                {/* <p className="mt-3 text-sm font-medium text-center text-neutral-700 dark:text-neutral-300">
                  {tech.title}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default TechStack;
