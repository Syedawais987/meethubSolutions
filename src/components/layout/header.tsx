"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="MeetHub Solutions"
              width={160}
              height={45}
              className="h-9 w-auto md:h-11"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.main.map((item) => {
              const hasChildren = "children" in item && item.children;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {hasChildren && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full z-50 w-64 rounded-xl border border-border bg-popover p-2 shadow-lg"
                      >
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="tel:+923333551164"
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+92 333 3551164</span>
            </a>
            <ThemeToggle />
            <Link
              href={navigation.cta.href}
              className="ml-1 inline-flex h-8 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              {navigation.cta.label}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - OUTSIDE header to avoid stacking context issues */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          style={{ top: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu content */}
          <div className="relative z-10 flex h-full flex-col bg-background">
            {/* Menu header matching main header */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4 md:h-20">
              <Link
                href="/"
                className="flex shrink-0 items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/images/logo.png"
                  alt="MeetHub Solutions"
                  width={160}
                  height={45}
                  className="h-9 w-auto md:h-11"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Scrollable nav items */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 pb-24">
              <div className="space-y-1">
                {navigation.main.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {"children" in item &&
                      item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-6 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <Link
                  href="/contact"
                  className="flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:+923333551164"
                  className="mt-3 flex items-center justify-center gap-2 rounded-md py-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +92 333 3551164
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
