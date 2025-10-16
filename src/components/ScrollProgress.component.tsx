"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue via-light_red to-red"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </motion.div>
  );
}
