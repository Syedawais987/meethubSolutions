"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-14 items-center border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
      <a
        href="tel:+923345444107"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Phone className="h-5 w-5" />
        <span>Call</span>
      </a>
      <a
        href={getWhatsAppUrl(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium text-[#25D366]"
      >
        <MessageCircle className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
      <a
        href="/contact"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <CalendarCheck className="h-5 w-5" />
        <span>Book</span>
      </a>
    </div>
  );
}
