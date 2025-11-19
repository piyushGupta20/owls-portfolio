import { StructuredData } from "@/components/structured-data";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import IntegrationsSection from "@/components/sections/integrations-section";
import ContentSection from "@/components/sections/content-section";
import StatsSection from "@/components/sections/stats-section";
import FAQsSection from "@/components/sections/faqs-section";
import CallToAction from "@/components/sections/call-to-action-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        <ContentSection />
        <StatsSection />
        <FAQsSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
