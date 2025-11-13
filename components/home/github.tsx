import { IconBrandGithubCopilot } from "@tabler/icons-react";
import Link from "next/link";
import Container from "../container";

const Github = () => {
  return (
    <>
      <div
        aria-hidden
        className={
          "relative -right-px col-start-2 row-span-full row-start-1 border-x-[color:var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed h-10 w-full pointer-events-none border-b border-border/15 dark:border-border"
        }
      />
      <Container className="px-6 w-full">
        <div className="flex flex-row gap-4 items-center mt-4 justify-between">
          <h1 className="font-semibold text-3xl dark:text-white text-neutral-800">
            Contributions
          </h1>
          <Link
            href="https://github.com/gitcuber369"
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0 bg-cardColor text-white hover:bg-cardColorForeground py-4 shadow-premium h-6 px-3 text-xs hover:text-brand font-['Manrope']"
          >
            <IconBrandGithubCopilot className="text-neutral-500" />
            <p className="font-['Manrope'] text-white font-semibold">Github</p>
          </Link>
        </div>
        <div>
            
        </div>
      </Container>
    </>
  );
};

export default Github;
