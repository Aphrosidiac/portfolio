"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface TiltCard3DProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  perspective?: number;
}

export function TiltCard3D({
  children,
  className = "",
  tiltAmount = 12,
  perspective = 800,
}: TiltCard3DProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);
  const rafId = useRef<number>(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let active = false;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (!active) return;

      current.current.x = lerp(current.current.x, target.current.x, 0.12);
      current.current.y = lerp(current.current.y, target.current.y, 0.12);

      const x = current.current.x;
      const y = current.current.y;
      const card = cardRef.current;
      const rect = card?.getBoundingClientRect();

      if (card && rect && hasMoved.current) {
        const tiltX = (y / rect.height - 0.5) * -tiltAmount;
        const tiltY = (x / rect.width - 0.5) * tiltAmount;

        card.style.transition = "none";
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;

        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = "1";
          spotlightRef.current.style.left = `${x - 200}px`;
          spotlightRef.current.style.top = `${y - 200}px`;
        }

        if (borderRef.current) {
          borderRef.current.style.opacity = "1";
          borderRef.current.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.1) 40%, transparent 60%)`;
        }
      }

      rafId.current = requestAnimationFrame(tick);
    };

    const el = wrapperRef.current;
    if (!el) return;

    const onEnter = () => {
      active = true;
      rafId.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (!hasMoved.current) {
        hasMoved.current = true;
        current.current.x = mx;
        current.current.y = my;
      }
      target.current.x = mx;
      target.current.y = my;
    };

    const onLeave = () => {
      active = false;
      hasMoved.current = false;
      cancelAnimationFrame(rafId.current);

      if (cardRef.current) {
        cardRef.current.style.transition = "transform 0.5s ease-out";
        cardRef.current.style.transform =
          "rotateX(0deg) rotateY(0deg) translateY(0)";
      }
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
      if (borderRef.current) borderRef.current.style.opacity = "0";

      target.current = { x: 0, y: 0 };
      current.current = { x: 0, y: 0 };
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [tiltAmount]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ perspective: `${perspective}px` }}
    >
      {/* Flat spotlight behind card */}
      <div
        ref={spotlightRef}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(193,199,206,0.35) 0%, rgba(193,199,206,0.12) 35%, transparent 65%)",
          filter: "blur(30px)",
          transition: "opacity 0.4s ease",
          willChange: "left, top",
          zIndex: 0,
        }}
      />

      {/* Tilting card */}
      <div
        ref={cardRef}
        className={`relative ${className}`}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          zIndex: 1,
        }}
      >
        {/*
          Border glow shell: this is the visible "border".
          It's a rounded box with padding. The radial gradient
          fills it, but the content div inside covers the center,
          leaving only the edges visible as a glowing border.
        */}
        <div
          className="relative rounded-lg overflow-hidden"
          style={{ padding: "2.5px" }}
        >
          {/* The gradient border layer — sits behind content */}
          <div
            ref={borderRef}
            className="absolute inset-0 rounded-lg"
            style={{
              opacity: 0,
              transition: "opacity 0.5s ease",
            }}
          />

          {/* Fallback static border when not hovering */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "rgba(72, 72, 72, 0.4)",
            }}
          />

          {/* Content — covers center, edge glow peeks around it */}
          <div className="relative rounded-[7px] overflow-hidden bg-background">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
