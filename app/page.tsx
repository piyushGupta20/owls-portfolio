import FooterSection from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/header";
import FeaturesSection from "@/components/features-8";
import IntegrationsSection from "@/components/integrations-3";
import ContentSection from "@/components/content-3";
import StatsSection from "@/components/stats-3";
import FAQsFour from "@/components/faqs-4";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        <ContentSection />
        <StatsSection />
        <FAQsFour />
        <CallToAction />
      </main>
      <FooterSection />
    </>
  );
}
