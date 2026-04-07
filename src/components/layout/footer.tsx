"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProfessionalBadges } from "@/components/shared/professional-badges";

const serviceLinks = [
  { label: "Accounting", href: "/services/accounting" },
  { label: "Outsourcing", href: "/services/outsourcing" },
  { label: "ERP Solutions", href: "/services/erp-solutions" },
  { label: "Tax Consultancy", href: "/services/tax-consultancy" },
  { label: "Corporate Advisory", href: "/services/corporate-advisory" },
  { label: "Training", href: "/services/training-development" },
  { label: "Travel & Tours", href: "/travel" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50 pb-14 md:pb-0">
      {/* Newsletter Section */}
      <div className="border-b border-border bg-primary/5">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground">
              Tax tips, business insights, and new travel packages — delivered monthly.
            </p>
          </div>
          <form
            className="flex w-full max-w-sm gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="MeetHub Solutions"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Pakistan&apos;s integrated professional services firm — accounting,
              advisory, and travel.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Razia Sharif Plaza, Blue Area, Islamabad
              </li>
              <li>
                <a
                  href="tel:+923333551164"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +92 333 3551164
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@meethubsolutions.com"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@meethubsolutions.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                Mon–Fri 9am–6pm, Sat 10am–2pm
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Badges */}
        <div className="mt-12 border-t border-border pt-8">
          <ProfessionalBadges />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} MeetHub Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
