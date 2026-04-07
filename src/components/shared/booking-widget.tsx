"use client";

import { Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

interface BookingWidgetProps {
  className?: string;
  variant?: "inline" | "modal";
}

export function BookingWidget({ className = "" }: BookingWidgetProps) {
  // TODO: Replace with actual Cal.com embed in Phase 5
  // For now, link to contact page or show placeholder
  return (
    <div className={`rounded-xl border border-border bg-card p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">
            Book a Consultation
          </h3>
          <p className="text-sm text-muted-foreground">
            Schedule a free 30-minute session
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Booking calendar will be integrated here
          </p>
        </div>
        <a
          href="/contact"
          className={buttonVariants({
            variant: "default",
            className: "w-full",
          })}
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
}
