import Container from "@/components/container";

const page = () => {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <Container className="h-[200vh] border-border border-x border mt-10">
        <div className="w-full flex mt-6 flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white dark:text-neutral-50">
            Comming Soon...
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default page;
