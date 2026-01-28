import React from 'react';
import Header from '@/components/landing-html/Header';
import HeroSection from '@/components/landing-html/HeroSection';
import ProblemsSection from '@/components/landing-html/ProblemsSection';
import HowItWorksSection from '@/components/landing-html/HowItWorksSection';
import FeaturesSection from '@/components/landing-html/FeaturesSection';
import WhyUsSection from '@/components/landing-html/WhyUsSection';
import AdminPanelSection from '@/components/landing-html/AdminPanelSection';
import IntegrationsSection from '@/components/landing-html/IntegrationsSection';
import SecuritySection from '@/components/landing-html/SecuritySection';
import ResultsSection from '@/components/landing-html/ResultsSection';
import PricingSection from '@/components/landing-html/PricingSection';
import UseCasesSection from '@/components/landing-html/UseCasesSection';
import FAQSection from '@/components/landing-html/FAQSection';
import DemoFormSection from '@/components/landing-html/DemoFormSection';
import Footer from '@/components/landing-html/Footer';
import VideoSection from '../landing/VideoSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <ProblemsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhyUsSection />
        <AdminPanelSection />
        <IntegrationsSection />
        <SecuritySection />
        <ResultsSection />
        <PricingSection />
        <UseCasesSection />
        <FAQSection />
        <DemoFormSection />
      </main>
      <Footer />
    </div>
  );
}
