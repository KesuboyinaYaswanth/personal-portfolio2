import Container from "@/components/container";
import Github from "@/components/home/github";
import Hero from "@/components/home/Hero";

function Home() {
  return (
    <div className="min-h-screen h-[300vh] flex flex-col">
      <Container className="border-border/15 dark:border-border border">
        <div className="w-full flex flex-col">
          <Hero />
          <Github />
        </div>
      </Container>
    </div>
  );
}

export default Home;
