"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";
import { ContactInfoBanner } from "./ContactInfoBanner";
import { useNavBar } from "./hooks/useNavBar";

export const NavBar = () => {
  const {
    navItems,
    isActive,
    mobileMenuContainerRef,
    isMobileMenuOpen,
    toggleMobileMenu,
    mobileNavMenuId,
  } = useNavBar();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background backdrop-blur-md">
      <ContactInfoBanner />
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="color-fade inline-flex items-center text-foreground hover:text-accent"
        >
          <span className="relative inline-block h-10 w-10 overflow-visible">
            <span className="pointer-events-none absolute h-14 w-44 sm:h-20 sm:w-52 top-1/2 -translate-x-9 sm:-translate-x-12 -translate-y-8 sm:-translate-y-12">
              <Image
                src="/ir-logo.png"
                alt="IronRiver Fabrication logo"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                className="object-contain object-left"
                priority
              />
            </span>
          </span>
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
            className="color-fade font-display hidden h-10 items-center justify-center border-2 border-border bg-surface px-4 text-base font-semibold uppercase tracking-widest text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] hover:border-accent hover:text-accent sm:inline-flex"
          >
            Get a Quote
          </a>
          <div
            ref={mobileMenuContainerRef}
            className="relative md:hidden"
          >
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileNavMenuId}
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              onClick={toggleMobileMenu}
              className="color-fade flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-border bg-surface text-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] hover:border-accent"
            >
              <span className="relative block h-5 w-5" aria-hidden>
                <span
                  className={cn(
                    "pointer-events-none absolute inset-0 flex h-5 w-5 flex-col justify-between py-0.5 opacity-100 transition-opacity duration-600 ease-in-out motion-reduce:transition-none",
                    isMobileMenuOpen && "pointer-events-none opacity-0",
                  )}
                >
                  <span className="block h-0.5 w-full shrink-0 rounded-full bg-current" />
                  <span className="block h-0.5 w-full shrink-0 rounded-full bg-current" />
                  <span className="block h-0.5 w-full shrink-0 rounded-full bg-current" />
                </span>
                <span
                  className={cn(
                    "pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-600 ease-in-out motion-reduce:transition-none",
                    isMobileMenuOpen && "opacity-100",
                  )}
                >
                  <span className="absolute h-0.5 w-5 origin-center rounded-full bg-current rotate-45" />
                  <span className="absolute h-0.5 w-5 origin-center rounded-full bg-current -rotate-45" />
                </span>
              </span>
            </button>
            <div
              id={mobileNavMenuId}
              role="navigation"
              aria-label="Primary mobile"
              aria-hidden={!isMobileMenuOpen}
              inert={!isMobileMenuOpen}
              className={cn(
                "absolute right-0 z-20 mt-2 w-52 border-2 border-border bg-surface p-1 shadow-[0_16px_48px_rgb(0_0_0/0.45)]",
                "transition-opacity duration-600 ease-in-out motion-reduce:transition-none",
                isMobileMenuOpen
                  ? "opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            >
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
          </div>
        </div>
      </div>
    </header>
  );
};
