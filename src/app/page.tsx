import { JsonLd, organizationSchema } from "@/components/shared/json-ld";
import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { ServiceGrid } from "@/components/sections/service-grid";
import { WorkingProcess } from "@/components/sections/working-process";
import { WhyMeetHub } from "@/components/sections/why-meethub";
import { StatsBar } from "@/components/sections/stats-bar";
import { FeaturedTravel } from "@/components/sections/featured-travel";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudySpotlight } from "@/components/sections/case-study-card";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Hero />
      <ClientLogos />
      <ServiceGrid />
      <WorkingProcess />
      <WhyMeetHub />
      <StatsBar />
      <FeaturedTravel />
      <Testimonials />
      <CaseStudySpotlight />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
