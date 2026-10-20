import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { ReactNode, RefObject } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

/** Soft watery entrance for page eyebrow, title, and description. */
export function PageIntro({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageIntroProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.from(".page-intro-item", {
        y: 25,
        opacity: 0,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.14,
        delay: 0.08,
      });
    },
    { scope: rootRef as RefObject<HTMLElement | null> },
  );

  return (
    <div ref={rootRef} className={cn("min-w-0", className)}>
      {eyebrow ? (
        <p className="page-intro-item mb-[0.45rem] text-[0.7875rem] text-muted-foreground/70">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="page-intro-item font-serif text-[2.025rem] font-semibold tracking-tight uppercase sm:text-[2.7rem]">
        {title}
      </h1>
      {description ? (
        <p className="page-intro-item mt-[0.45rem] max-w-[32.4rem] text-[0.7875rem] text-muted-foreground/70">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
