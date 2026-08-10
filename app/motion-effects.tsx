"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion-ready");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > article > header, main > article > div"));
    sections.forEach(section => section.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
    sections.forEach(section => observer.observe(section));
    requestAnimationFrame(() => document.documentElement.classList.add("page-ready"));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("page-ready");
    };
  }, [pathname]);

  return null;
}
