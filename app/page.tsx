import Container from "@/components/container";
import Hero from "@/components/home/Hero";

function Home() {
  return (
    <div className="min-h-screen h-[300vh] flex flex-col">
      <Container className="border-border dark:border-border">
        <div className="w-full flex flex-col">
          <Hero />
        </div>
      </Container>
    </div>
  );
}

export default Home;
