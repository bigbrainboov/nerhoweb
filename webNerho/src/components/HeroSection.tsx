import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AppStoreButtons } from './AppStoreButtons';
import { DesignImage } from './DesignImage';

export const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="page-container hero-grid">
      <div className="hero-copy">
        <div className="hero-kicker"><CheckCircle2 size={20} /><span>Building A Better Powered Nigeria, One Step At A Time.</span></div>
        <h1>Get Your <span>Essential</span><br className="hero-break" />{' '}<span>Requirements</span> Without Any<br className="hero-break" />{' '}Compromise</h1>
        <p>Power your home, equip your space, and protect what matters with Nerho. Explore solar and renewable energy, electricals, fittings, plumbing, CCTV, and more—with payment options that let you start with a deposit and pay the balance over time.</p>
        <AppStoreButtons />
      </div>
      <DesignImage name="heroImage" alt="The Nerho shopping app displayed on two phones" eager sizes="(max-width: 767px) 90vw, 50vw" className="hero-image" />
    </div>
  </section>
);
