import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("max-w-3xl mx-auto w-full", className)}>
      {children}
    </div>
  );
};

export default Container;
