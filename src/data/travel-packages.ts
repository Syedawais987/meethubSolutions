export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  meals?: ("breakfast" | "lunch" | "dinner")[];
  accommodation?: string;
}

export interface TravelPackage {
  slug: string;
  title: string;
  subtitle: string;
  category: "day-trip" | "adventure" | "corporate-retreat";
  coverImage: string;
  gallery: string[];
  duration: string;
  groupSize: string;
  difficulty?: "easy" | "moderate" | "challenging";
  startingPrice: number;
  priceNote?: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  importantNotes: string[];
  bestSeason?: string;
  departureCity?: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const travelPackages: TravelPackage[] = [
  {
    slug: "day-out-package",
    title: "Day Out Package — Lunch, Activities & Fun",
    subtitle: "A full day of food, fun, and team bonding for all employees",
    category: "day-trip",
    coverImage: "/images/travel/day-out-cover.jpg",
    gallery: [
      "/images/travel/day-out-gallery-1.jpg",
      "/images/travel/day-out-gallery-2.jpg",
      "/images/travel/day-out-gallery-3.jpg",
      "/images/travel/day-out-gallery-4.jpg",
      "/images/travel/day-out-gallery-5.jpg",
    ],
    duration: "1 Day",
    groupSize: "15-50 persons",
    difficulty: "easy",
    startingPrice: 3500,
    priceNote: "per person, minimum 15 pax",
    overview:
      "We not only provide services related to work — it's time to relax too! MHFS arranges complete day-out packages for all employees with lunch, dinner, team-building activities, and outdoor fun. Whether it's a team reward, annual get-together, or just a break from the office — we handle everything from transport to event coordination.",
    highlights: [
      "Full-day meals — lunch and dinner included",
      "Team-building activities and outdoor games",
      "Scenic outdoor venue near Islamabad",
      "Professional event coordination",
      "Photography and event coverage",
      "Customizable schedule and activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Full Day — Activities, Lunch & Dinner",
        description:
          "Morning departure from office. Arrive at venue for a day filled with team activities, games, meals, and relaxation. Return by evening.",
        highlights: [
          "Welcome and ice-breaker activities",
          "Outdoor team games and competitions",
          "Lunch — BBQ / buffet at venue",
          "Afternoon leisure and group activities",
          "Dinner and award ceremony",
          "Return to office / drop-off",
        ],
        meals: ["lunch", "dinner"],
      },
    ],
    includes: [
      "Round-trip transport (AC bus/coaster)",
      "Venue booking and setup",
      "Lunch and dinner",
      "Team-building activities and equipment",
      "Event coordination and management",
      "Photography coverage",
    ],
    excludes: [
      "Personal shopping and expenses",
      "Additional snacks beyond itinerary",
      "Individual transport requests",
    ],
    importantNotes: [
      "Minimum 15 persons required for booking",
      "Booking must be made at least 7 days in advance",
      "Custom venues and themes available on request",
      "Vegetarian and dietary options available — inform at booking",
    ],
    featured: true,
    seo: {
      title: "Day Out Package — Lunch, Activities & Team Fun | MHFS",
      description:
        "Corporate day out packages near Islamabad. Lunch, dinner, team activities, transport included. Starting PKR 3,500/person.",
      keywords: [
        "corporate day out Islamabad",
        "team building packages Pakistan",
        "day out with lunch dinner",
        "employee day out package",
      ],
    },
  },
  {
    slug: "skardu-adventure-tour",
    title: "Trip to Skardu — Northern Adventure",
    subtitle: "5 days through Pakistan's most breathtaking landscapes",
    category: "adventure",
    coverImage: "/images/travel/skardu-cover.jpg",
    gallery: [
      "/images/travel/skardu-gallery-1.jpg",
      "/images/travel/skardu-gallery-2.jpg",
      "/images/travel/skardu-gallery-3.jpg",
      "/images/travel/skardu-gallery-4.jpg",
      "/images/travel/skardu-gallery-5.jpg",
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "10-25 persons",
    difficulty: "moderate",
    startingPrice: 45000,
    priceNote: "per person, twin sharing, minimum 10 pax",
    bestSeason: "May - October",
    departureCity: "Islamabad",
    overview:
      "Experience the raw beauty of Pakistan's northern frontier. Drive along the legendary Karakoram Highway, explore the serene lakes of Skardu, and witness the vast expanse of Deosai — one of the highest plateaus in the world.",
    highlights: [
      "Drive along the legendary Karakoram Highway",
      "Visit Shangrila Resort (Lower Kachura Lake)",
      "Explore Upper Kachura Lake by boat",
      "Skardu Fort and panoramic valley views",
      "Deosai National Park — the Land of Giants",
      "Cold desert experience at Katpana Desert",
    ],
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Chilas",
        description:
          "Early morning departure. Drive along Karakoram Highway through Abbottabad, Mansehra, Besham, and Dasu to Chilas.",
        highlights: [
          "Karakoram Highway",
          "Indus River views",
          "Mountain passes",
        ],
        meals: ["lunch", "dinner"],
        accommodation: "Hotel in Chilas",
      },
      {
        day: 2,
        title: "Chilas to Skardu",
        description:
          "Continue through dramatic mountain terrain to Skardu. Afternoon at leisure to explore Skardu Bazaar.",
        highlights: [
          "Confluence of rivers",
          "Skardu Bazaar",
          "Mountain panoramas",
        ],
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Hotel in Skardu",
      },
      {
        day: 3,
        title: "Skardu Exploration Day",
        description: "Full day exploring Skardu's iconic attractions.",
        highlights: [
          "Shangrila Resort",
          "Upper Kachura Lake",
          "Skardu Fort",
        ],
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Hotel in Skardu",
      },
      {
        day: 4,
        title: "Deosai National Park",
        description:
          "Day trip to Deosai — one of the highest plateaus in the world. Spot Himalayan brown bears, marmots, and wildflowers.",
        highlights: [
          "Deosai Plateau",
          "Sheosar Lake",
          "Wildlife spotting",
        ],
        meals: ["breakfast", "lunch", "dinner"],
        accommodation: "Hotel in Skardu",
      },
      {
        day: 5,
        title: "Skardu to Islamabad",
        description:
          "Early departure for the return journey. Arrive Islamabad by late evening.",
        highlights: ["Return via KKH", "Final mountain views"],
        meals: ["breakfast", "lunch"],
      },
    ],
    includes: [
      "Transport (AC coaster/hiace)",
      "Accommodation (twin sharing)",
      "Meals as per itinerary",
      "Local guide",
      "Entry fees to listed sites",
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Activities not in itinerary",
    ],
    importantNotes: [
      "Valid CNIC/passport required",
      "Road conditions may vary — flexible itinerary",
      "Not recommended for individuals with severe motion sickness",
      "Cancellation policy: Full refund 15+ days before, 50% refund 7-14 days, no refund within 7 days",
    ],
    featured: true,
    seo: {
      title: "Skardu Tour Package — 5 Days from Islamabad",
      description:
        "5-day Skardu adventure tour from Islamabad. KKH, Shangrila, Deosai, Upper Kachura. Starting PKR 45,000/person.",
      keywords: [
        "Skardu tour package",
        "Skardu trip from Islamabad",
        "northern areas tour package",
        "Deosai trip",
      ],
    },
  },
];

export function getTravelPackageBySlug(
  slug: string
): TravelPackage | undefined {
  return travelPackages.find((p) => p.slug === slug);
}
