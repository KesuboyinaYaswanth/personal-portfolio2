import Container from "../container";

const Introduction = () => {
  return (
    <div className="w-full border-y dark:border-border border-border/15">
      <Container className="items-start justify-start flex flex-col h-full dark:border-border border-border/15 border-x">
        <div className="flex flex-row items-start justify-start gap-4 w-full">
          <div className="flex flex-col items-start justify-start"></div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
