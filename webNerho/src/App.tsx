/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { DeleteAccountPage } from './components/DeleteAccountPage';
import { SupportPage } from './components/SupportPage';
import { ContactPage } from './components/ContactPage';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyNerhoSection } from './components/WhyNerhoSection';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { JourneySection } from './components/JourneySection';
import { EssentialsBanner } from './components/EssentialsBanner';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import {
  DownloadModal,
  AskAnythingModal,
} from './components/Modals';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const pageTitles: Record<string, string> = { '/terms': 'Terms & Conditions', '/privacy-policy': 'Privacy Policy', '/delete-account': 'Delete Account', '/support': 'App Support', '/contact': 'Contact Us' };
  React.useEffect(() => { document.title = pageTitles[path] ? `${pageTitles[path]} | Nerho` : 'Nerho - Essential Sustainable Energy & Home Solutions'; }, [path]);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [askAnythingModalOpen, setAskAnythingModalOpen] = useState(false);

  const handleDownloadClick = (platform: 'ios' | 'android') => {
    console.log(`Initiating download for ${platform}`);
    setDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
      />

      {/* Main Content Sections strictly adhering to Figma hierarchy */}
      <main className="flex-grow">
        {path === '/terms' ? <TermsPage /> :
         path === '/privacy-policy' ? <PrivacyPage /> :
         path === '/delete-account' ? <DeleteAccountPage /> :
         path === '/support' ? <SupportPage onAskAnythingClick={() => setAskAnythingModalOpen(true)} /> :
         path === '/contact' ? <ContactPage /> : <>
        {/* 1. Hero Banner Section with Two Phones */}
        <HeroSection onDownloadClick={handleDownloadClick} />

        {/* 2. What Makes Nerho Different? (Why Nerho) */}
        <WhyNerhoSection />

        {/* 3. Nerho Services Carousel */}
        <ServicesSection
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
        />

        {/* 4. Nerho Benefits & Payment Options */}
        <BenefitsSection
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
        />

        {/* 5. Our Journey & Metrics */}
        <JourneySection />

        {/* 6. Essentials Banner */}
        <EssentialsBanner onDownloadClick={handleDownloadClick} />

        </>}

        {/* 7. FAQ Section */}
        {(path === '/' || path === '/contact') && <FAQSection onAskAnythingClick={() => setAskAnythingModalOpen(true)} />}
      </main>

      {/* 8. Download Banner & Footer */}
      <Footer
        onDownloadClick={handleDownloadClick}
      />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
      <AskAnythingModal
        isOpen={askAnythingModalOpen}
        onClose={() => setAskAnythingModalOpen(false)}
      />
    </div>
  );
}
