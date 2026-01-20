import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import VideoSection from '@/components/landing/VideoSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import WhyUsSection from '@/components/landing/WhyUsSection';
import TeamProfilesSection from '@/components/landing/TeamProfilesSection';
import AdminPanelSection from '@/components/landing/AdminPanelSection';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import SecuritySection from '@/components/landing/SecuritySection';
import ResultsSection from '@/components/landing/ResultsSection';
import PricingSection from '@/components/landing/PricingSection';
import UseCasesSection from '@/components/landing/UseCasesSection';
import FAQSection from '@/components/landing/FAQSection';
import DemoFormSection from '@/components/landing/DemoFormSection';
import Footer from '@/components/landing/Footer';
import AnimatedBackground from '@/components/landing/AnimatedBackground';
import CursorGlow from '@/components/landing/CursorGlow';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <CursorGlow />
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhyUsSection />
        <AdminPanelSection />
        <IntegrationsSection />
        <SecuritySection />
        <ResultsSection />
        <TeamProfilesSection />
        <PricingSection />
        <UseCasesSection />
        <FAQSection />
        <DemoFormSection />
      </main>
      <Footer />
    </div>
  );
}