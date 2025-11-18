import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type FadeInProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  className?: string;
  mode?: "inView" | "mount";
}>;

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  y = 12,
  once = true,
  className,
  mode = "inView",
}: FadeInProps) {
  const base = {
    className,
    initial: { opacity: 0, y },
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  } as const;

  if (mode === "mount") {
    return (
      <motion.div {...base} animate={{ opacity: 1, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...base}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}
