"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { navigation, serviceCategories } from "@/data/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

const allServices = serviceCategories.flatMap((cat) => cat.services);

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

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
        <div className="container mx-auto flex h-16 items-center justify-between md:h-20 px-4 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Meet Hub Financial Services"
              width={250}
              height={73}
              className="h-10 w-auto md:h-12 dark:brightness-200 dark:contrast-75"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.main.map((item) => {
              const isServices = item.label === "Services";
              const hasChildren = "children" in item && item.children;

              // Services — simple single-level dropdown
              if (isServices) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("Services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                        isActive("/services") ? "text-brand-teal font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>

                    <AnimatePresence>
                      {activeDropdown === "Services" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full z-50 w-64 rounded-xl border border-border bg-popover p-2 shadow-lg"
                        >
                          {allServices.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {service.label}
                            </Link>
                          ))}
                          <div className="mt-1 border-t border-border pt-1">
                            <Link
                              href="/services"
                              className="block rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted"
                              onClick={() => setActiveDropdown(null)}
                            >
                              View All Services
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Regular items with simple dropdown (About)
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
                    className={`flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-brand-teal font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </Link>

                  <AnimatePresence>
                    {hasChildren && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full z-50 w-56 rounded-xl border border-border bg-popover p-2 shadow-lg"
                      >
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary"
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
              href="tel:+923345444107"
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+92 334 5444107</span>
            </a>
            <ThemeToggle />
            <Link
              href={navigation.cta.href}
              className="ml-1 inline-flex h-8 items-center justify-center rounded-lg border border-primary/30 px-4 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {navigation.cta.label}
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923345444107"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-4 text-sm font-bold text-white transition-colors hover:bg-[#1fad55]"
            >
              Contact Us
            </a>
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] lg:hidden"
          style={{ top: 0 }}
        >
          <div className="absolute inset-0 bg-background" />
          <div className="relative z-10 flex h-full flex-col bg-background">
            {/* Mobile header */}
            <div className="flex h-16 shrink-0 items-center justify-between md:h-20 border-b border-border px-4 md:h-20">
              <Link
                href="/"
                className="flex shrink-0 items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/images/logo.png"
                  alt="Meet Hub Financial Services"
                  width={250}
                  height={73}
                  className="h-10 w-auto md:h-12 dark:brightness-200 dark:contrast-75"
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

            {/* Mobile nav items */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 pb-24">
              <div className="space-y-1">
                {navigation.main.map((item) => {
                  const isServices = item.label === "Services";
                  const hasChildren = "children" in item && item.children;
                  const isExpanded = mobileExpanded === item.label;

                  // Services — collapsible with categories
                  if (isServices) {
                    return (
                      <div key={item.href}>
                        <button
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : "Services")
                          }
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground"
                        >
                          Services
                          <ChevronDown
                            className={`h-4 w-4 text-muted-foreground transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isExpanded && (
                          <div className="space-y-0.5">
                            {allServices.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block rounded-md px-6 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                                onClick={() => setMobileOpen(false)}
                              >
                                {service.label}
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              className="block rounded-md px-6 py-2.5 text-sm font-semibold text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              View All Services
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // About and other items with children — collapsible
                  if (hasChildren) {
                    return (
                      <div key={item.href}>
                        <button
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : item.label)
                          }
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-foreground"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 text-muted-foreground transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isExpanded &&
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
                    );
                  }

                  // Simple links
                  return (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
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
                  href="tel:+923345444107"
                  className="mt-3 flex items-center justify-center gap-2 rounded-md py-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +92 334 5444107
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
