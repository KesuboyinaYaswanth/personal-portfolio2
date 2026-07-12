import Container from "../container";

const Experience = () => {
  return (
    <>
      <div
        aria-hidden
        className="relative -right-px col-start-2 row-span-full row-start-1 border-x-[color:var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed h-10 w-full pointer-events-none border-y border-border/15 dark:border-border"
      />

      <Container className="px-6 w-full my-4">
        <div className="flex">
          <h1 className=" font-semibold text-3xl dark:text-white text-neutral-800">
            My Work Experience
          </h1>
        </div>

        {/* Experience Card */}
        <div className="mt-8 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            AWS AI-ML Virtual Internship
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            EduSkills | AWS Academy
          </p>

          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Completed a virtual internship focused on Artificial Intelligence
            and Machine Learning using AWS services. Gained hands-on experience
            with cloud-based AI/ML concepts, data processing, model training,
            and deployment workflows. Explored various AWS tools and services
            used in modern machine learning applications.
          </p>

          <ul className="list-disc ml-6 mt-4 text-neutral-700 dark:text-neutral-300">
            <li>Learned fundamentals of AI and Machine Learning.</li>
            <li>Worked with AWS cloud services and ML tools.</li>
            <li>Understood data preprocessing and model building workflows.</li>
            <li>Explored real-world AI/ML use cases and applications.</li>
          </ul>

          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Duration: [Month Year] – [Month Year]
          </p>
        </div>
      </Container>
    </>
  );
};

export default Experience;
