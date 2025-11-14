import Container from "@/components/container";
import Experience from "@/components/home/experience";
import Github from "@/components/home/github";
import Hero from "@/components/home/Hero";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Container className="relative z-10 border-border/15 dark:border-border border">
        {/* <FlickeringGrid className="absolute inset-y-0 -left-22 w-24 pointer-events-none hidden lg:block z-0 border-border/15 dark:border-border" />
        <FlickeringGrid className="absolute inset-y-0 -right-24 w-24 pointer-events-none hidden lg:block z-0 border-border/15 dark:border-border" /> */}
        <div className="w-full flex flex-col">
          <Hero />
          <Github />
          <Experience />
        </div>
      </Container>
    </div>
  );
}

export default Home;
