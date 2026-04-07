const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const whatsappMessages = {
  general:
    "Hello! I'd like to learn more about MeetHub Solutions services.",
  accounting:
    "Hi, I'm interested in your accounting services. Can you share details and pricing?",
  outsourcing:
    "Hi, I'd like to know more about your department outsourcing services.",
  erp: "Hello, I need help with ERP implementation. Can we discuss?",
  tax: "Hi, I need assistance with tax filing / registration. What are your rates?",
  secp: "Hello, I'd like to register a company with SECP. Can you guide me on the process and fees?",
  visitingCfo:
    "Hi, I'm interested in your Visiting CFO service. How does it work?",
  training:
    "Hello, I'd like to inquire about corporate training programs.",
  travel:
    "Hi, I'm interested in your travel packages. Can you share available trips?",
  travelBooking: (pkg: string) =>
    `Hi, I'd like to book the "${pkg}" package. Can you share availability and pricing?`,
  quote: (service: string) =>
    `Hi, I'd like to get a quote for ${service}. Can we discuss my requirements?`,
} as const;
