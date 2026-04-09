export const siteConfig = {
  name: "Meet Hub Financial Services",
  description:
    "Pakistan's integrated professional services firm — accounting, tax consultancy, corporate advisory, ERP solutions, training, and travel services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://meethubsolutions.com",
  email: "meethub101@gmail.com",
  phone: "+92 334 5444107",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923345444107",
  address: "DHA 2, Islamabad",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61574347864306",
    instagram: "https://www.instagram.com/meethubfinancial?utm_source=qr&igsh=NnIwdHNuZTdqank0",
  },
} as const;
