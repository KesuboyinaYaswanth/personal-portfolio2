import Container from "../container";

const Projects = () => {
  return (
    <>
      <div
        aria-hidden
        className="relative -right-px col-start-2 row-span-full row-start-1 border-x-[color:var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed h-10 w-full pointer-events-none border-y border-border/15 dark:border-border"
      />

      <Container className="px-6 w-full my-4">
        <div className="flex">
          <h1 className="font-semibold text-3xl dark:text-white text-neutral-800">
            My Projects
          </h1>
        </div>

        {/* RepoPilot */}
        <div className="mt-8 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            RepoPilot – GitHub Repository AI Assistant
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            AI Powered • RAG • Llama 3.2 • Ollama
          </p>

          <p className="text-sm text-left text-neutral-700 dark:text-neutral-300 font-['Manrope'] leading-snug tracking-tight">
            Developed an AI-powered Retrieval-Augmented Generation (RAG)
            application that allows users to provide a GitHub repository URL and
            ask natural language questions about the repository. The system
            analyzes source code, documentation, and project structure to
            generate accurate, context-aware responses.
          </p>

          <ul className="list-disc ml-6 mt-4 text-neutral-700 dark:text-neutral-300 font-['Manrope'] leading-snug tracking-tight">
            <li>Parsed GitHub repositories and extracted source code.</li>
            <li>Generated embeddings using Nomic Embed Text.</li>
            <li>Implemented semantic search using a vector database.</li>
            <li>
              Integrated Llama 3.2 through Ollama for intelligent responses.
            </li>
            <li>
              Built a responsive Streamlit interface for repository analysis.
            </li>
          </ul>

          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Tech Stack: Python, Streamlit, LangChain, ChromaDB, Ollama,
            GitPython
          </p>
        </div>

        {/* RAG PDF Assistant
        <div className="mt-8 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            RAG PDF Assistant
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            AI Powered • Document Question Answering
          </p>

          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Built a Retrieval-Augmented Generation application that enables
            users to upload PDF documents and ask questions in natural language.
            The assistant retrieves relevant document content and generates
            accurate, context-aware answers.
          </p>

          <ul className="list-disc ml-6 mt-4 text-neutral-700 dark:text-neutral-300">
            <li>Implemented PDF parsing and intelligent text chunking.</li>
            <li>Generated vector embeddings for semantic retrieval.</li>
            <li>Integrated ChromaDB for efficient document search.</li>
            <li>Used Llama 3.2 through Ollama for answer generation.</li>
            <li>Designed an interactive Streamlit user interface.</li>
          </ul>

          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Tech Stack: Python, Streamlit, LangChain, ChromaDB, Ollama, PyPDF2
          </p>
        </div> */}
      </Container>
    </>
  );
};

export default Projects;
