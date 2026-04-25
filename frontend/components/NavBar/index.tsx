"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";
import { ContactInfoBanner } from "./ContactInfoBanner";
import { useNavBar } from "./hooks/useNavBar";

export const NavBar = () => {
  const { navItems, isActive } = useNavBar();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-md">
      <ContactInfoBanner />
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <Link
          href="/"
          className="color-fade font-display text-base font-bold uppercase tracking-[0.18em] text-foreground hover:text-accent"
        >
          IR
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-display color-fade text-base font-semibold uppercase tracking-[0.22em] text-muted hover:text-foreground",
                isActive(item.href) && "text-accent",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneE164}`}
            className="color-fade font-display hidden h-10 items-center justify-center border-2 border-border bg-surface px-4 text-xs font-semibold uppercase tracking-widest text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] hover:border-accent hover:text-accent sm:inline-flex"
          >
            Call
          </a>
          <details className="relative md:hidden">
            <summary
              className="color-fade font-display flex h-10 cursor-pointer list-none items-center gap-2 border-2 border-border bg-surface px-3 text-xs font-semibold uppercase tracking-widest text-foreground marker:hidden shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] hover:border-accent"
              aria-label="Open menu"
            >
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-52 border-2 border-border bg-surface p-1 shadow-[0_16px_48px_rgb(0_0_0_/_0.45)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-display color-fade block rounded-sm px-3 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted hover:bg-surface-elevated hover:text-foreground",
                    isActive(item.href) && "bg-surface-elevated text-accent",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="font-display mt-1 block rounded-sm px-3 py-2.5 text-xs font-semibold uppercase tracking-widest text-accent hover:bg-surface-elevated"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};
