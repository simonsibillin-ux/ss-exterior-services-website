"use client";

import { useEffect } from "react";

export function ServiceHashScroll() {
  useEffect(() => {
    const categoryIds = new Set(["exterior-washing", "roof-gutter-solar", "pressure-cleaning-sealing"]);

    const centreTarget = (id = decodeURIComponent(window.location.hash.slice(1))) => {
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - Math.max(0, (window.innerHeight - target.offsetHeight) / 2);
      window.scrollTo({ top, behavior: "smooth" });
    };

    const settleOnTarget = () => {
      centreTarget();
      window.setTimeout(() => centreTarget(), 180);
    };

    const handleCategoryClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      const id = decodeURIComponent(url.hash.slice(1));
      if (url.pathname !== window.location.pathname || !categoryIds.has(id)) return;
      event.preventDefault();
      history.pushState(null, "", url.hash);
      centreTarget(id);
    };

    requestAnimationFrame(() => requestAnimationFrame(settleOnTarget));
    const handleHashChange = () => settleOnTarget();
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleCategoryClick);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleCategoryClick);
    };
  }, []);

  return null;
}
