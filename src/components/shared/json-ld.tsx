interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MeetHub Solutions",
  url: "https://meethubsolutions.com",
  description:
    "Pakistan's integrated professional services firm — accounting, tax consultancy, corporate advisory, ERP solutions, training, and travel services.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@meethubsolutions.com",
    availableLanguage: ["English", "Urdu"],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MeetHub Solutions",
  url: "https://meethubsolutions.com",
  description:
    "Accounting, tax consultancy, corporate advisory, ERP solutions, training, and travel services in Pakistan.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
  email: "info@meethubsolutions.com",
  priceRange: "$$",
};

export function serviceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "MeetHub Solutions",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: `https://meethubsolutions.com/services/${service.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
