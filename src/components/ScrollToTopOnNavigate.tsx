"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollToTopOnNavigate = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0 });
    };

    // Wait a frame so the next page has mounted/layouted.
    requestAnimationFrame(() => requestAnimationFrame(scrollToTop));
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
        return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!anchor) return;
      if (anchor instanceof HTMLAnchorElement) {
        if (anchor.target && anchor.target !== "_self") return;
      }
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      // Ignore cross-origin links.
      if (url.origin !== window.location.origin) return;

      // Let hash/anchor navigations behave normally.
      if (url.hash) return;

      const current = new URL(window.location.href);
      const isSamePage =
        url.pathname === current.pathname && url.search === current.search;

      if (!isSamePage) return;

      // Same-page links won't trigger a route change; force scroll-to-top.
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

