"use client";

import { cn } from "@/utils/cn";
import { motion, useScroll, useTransform } from "framer-motion";
import { ElementRef, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

export const WindowPopOut: React.FC<Props> = ({ children, className }) => {
  const ref = useRef<ElementRef<"div">>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [90, 0]);

  return (
    <motion.div
      style={{
        opacity: scrollYProgress,
        rotateY: rotate,
      }}
      ref={ref}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};
