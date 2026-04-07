export const siteConfig = {
  name: "MeetHub Solutions",
  description:
    "Pakistan's integrated professional services firm — accounting, tax consultancy, corporate advisory, ERP solutions, training, and travel services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://meethubsolutions.com",
  email: "info@meethubsolutions.com",
  phone: "+92 333 3551164",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923333551164",
  address: "Razia Sharif Plaza, Blue Area, Islamabad",
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  },
} as const;
