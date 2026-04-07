"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition-transform hover:scale-110 md:block"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
