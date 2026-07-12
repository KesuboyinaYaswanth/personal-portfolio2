"use client";

import { useEffect, useRef } from "react";

const colors = Array(1).fill("#ffffff");

export default function CursorTrail() {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current;

    // circles.forEach((circle, index) => {
    //   if (!circle) return;

    //   circle.style.backgroundColor = colors[index % colors.length];

    //   (circle as any).x = 0;
    //   (circle as any).y = 0;
    // });
    circles.forEach((circle) => {
      if (!circle) return;

      (circle as any).x = window.innerWidth / 2;
      (circle as any).y = window.innerHeight / 2;

      circle.style.backgroundColor = "#ffffff";
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    // const animateCircles = () => {
    //   let x = coords.current.x;
    //   let y = coords.current.y;

    //   circles.forEach((circle, index) => {
    //     if (!circle) return;

    //     circle.style.left = `${x - 12}px`;
    //     circle.style.top = `${y - 12}px`;
    //     circle.style.transform = `scale(${
    //       (circles.length - index) / circles.length
    //     })`;

    //     (circle as any).x = x;
    //     (circle as any).y = y;

    //     const nextCircle = circles[index + 1] || circles[0];

    //     if (nextCircle) {
    //       x += (((nextCircle as any).x ?? x) - x) * 0.3;
    //       y += (((nextCircle as any).y ?? y) - y) * 0.3;
    //     }
    //   });

    //   animationFrame = requestAnimationFrame(animateCircles);
    // };
    const animateCircles = () => {
      const circle = circles[0];
      if (!circle) return;

      // Current position
      (circle as any).x += (coords.current.x - (circle as any).x) * 0.12;
      (circle as any).y += (coords.current.y - (circle as any).y) * 0.12;

      circle.style.left = `${(circle as any).x - 12}px`;
      circle.style.top = `${(circle as any).y - 12}px`;

      animationFrame = requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {colors.map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            circlesRef.current[index] = el;
          }}
          className="circle"
        />
      ))}
    </>
  );
}
