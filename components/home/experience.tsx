import Container from "../container";

const Experience = () => {
  return (
    <>
      <div
        aria-hidden
        className={
          "relative -right-px col-start-2 row-span-full row-start-1 border-x-[color:var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed h-10 w-full pointer-events-none border-y border-border/15 dark:border-border"
        }
      />
      <Container className="px-6 w-full my-4">
        <div className="flex">
          <h1 className="font-semibold text-3xl dark:text-white text-neutral-800">
            My work experience
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Experience;
