"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MotionEffects() {
  const pathname = usePathname();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const finish = window.setTimeout(() => setLeaving(false), 320);
    return () => window.clearTimeout(finish);
  }, [pathname]);

  useEffect(() => {
    function followLink(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      if (destination.pathname === window.location.pathname && destination.hash) {
        const target = document.querySelector<HTMLElement>(destination.hash);
        if (!target) return;
        event.preventDefault();
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const start = window.scrollY;
        const headerOffset = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
        const end = target.getBoundingClientRect().top + start - headerOffset;
        const duration = reducedMotion ? 0 : 1150;
        const started = performance.now();
        const animate = (now: number) => {
          const progress = duration === 0 ? 1 : Math.min((now - started) / duration, 1);
          const eased = progress < .5 ? 4 * progress ** 3 : 1 - ((-2 * progress + 2) ** 3) / 2;
          window.scrollTo(0, start + (end - start) * eased);
          if (progress < 1) requestAnimationFrame(animate);
          else window.history.replaceState(null, "", destination.hash);
        };
        requestAnimationFrame(animate);
        return;
      }

      if (destination.pathname !== window.location.pathname) setLeaving(true);
    }
    document.addEventListener("click", followLink, true);
    return () => document.removeEventListener("click", followLink, true);
  }, []);

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

  return <div className={`page-transition${leaving ? " is-active" : ""}`} aria-hidden="true"><img src="/images/logo.png" alt="" /><span /></div>;
}
