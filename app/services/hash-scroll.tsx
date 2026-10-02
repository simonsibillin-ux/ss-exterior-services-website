"use client";

import { useEffect } from "react";

export function ServiceHashScroll() {
  useEffect(() => {
    const centreTarget = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "center" }));
    };

    centreTarget();
    window.addEventListener("hashchange", centreTarget);
    return () => window.removeEventListener("hashchange", centreTarget);
  }, []);

  return null;
}
