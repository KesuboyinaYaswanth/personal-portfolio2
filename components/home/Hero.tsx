import { GitcuberEffect } from "../apple-hello-effect";
import Container from "../container";

const Hero = () => {
  return (
    <div className="w-full bg-background/10">
      <Container className="items-center justify-center flex flex-col h-[40vh] border-border border-b bg-dot-pattern">
        <div className="flex items-center justify-center overflow-hidden w-full h-full bg-background/50">
          <GitcuberEffect className="size-95" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
