"use client";

import { useEffect, useState, RefObject } from "react";

interface UseIntersectionObserverProps {
  refs: RefObject<(HTMLElement | null)[]>;
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  refs,
  threshold = 0.5,
  rootMargin = "-20% 0px -35% 0px",
}: UseIntersectionObserverProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && refs.current) {
            const index = refs.current.findIndex((el) => el === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    if (refs.current) {
      refs.current.forEach((el) => {
        if (el) observer.observe(el);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [refs, threshold, rootMargin]);

  return activeIndex;
};
