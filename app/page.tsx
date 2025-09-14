import Container from "@/components/container";
import Hero from "@/components/home/Hero";

function Home() {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="h-[200vh] border-border border-x border mt-10">
        <div className="w-full flex mt-6">
          <Hero />
        </div>
      </Container>
    </div>
  );
}

export default Home;
