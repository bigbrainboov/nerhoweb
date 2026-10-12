import React from 'react';
import { BadgeCheck, ShieldCheck, UserRound } from 'lucide-react';
import { DesignImage } from './DesignImage';

const paymentFeatures = ['Percentage Down Payment', 'Pay the Balance Over Time', 'Pay With Partner', 'Interest-Free Pay With Zero'];
const Checklist = ({ items }: { items: string[] }) => <ul className="feature-checklist">{items.map(item => <li key={item}><BadgeCheck size={17} fill="currentColor" /><span>{item}</span></li>)}</ul>;


export const WhyNerhoSection: React.FC = () => (
  <section className="design-section why-section"><div className="page-container">
    <div className="section-heading"><span className="section-label">Why Nerho</span><h2>What Makes Nerho Different?</h2></div>
    <div className="features-grid">
      <article className="feature-card"><div className="feature-content"><div className="feature-icon blue"><ShieldCheck /></div><h3>Your Essentials, In One Place</h3><p>Find solar and renewable energy products, electricals, fittings, plumbing, and CCTV through Nerho.</p><Checklist items={['Solar & Renewable Energy', 'Electricals & Fittings', 'Plumbing & CCTV']} /></div><div className="feature-image"><DesignImage name="whyNerho1" alt="QC verified product detail screen" /></div></article>
      <article className="feature-card"><div className="feature-content"><div className="feature-icon orange"><ShieldCheck /></div><h3>Payment Plans That Fit Your Needs</h3><p>Our Pay Small Small plans let you start with a percentage down payment and complete the balance over an agreed period.</p><Checklist items={paymentFeatures} /></div><div className="feature-image"><DesignImage name="whyNerho2" alt="Nerho return order screen" /></div></article>
      <article className="feature-card feature-wide"><div className="feature-content"><div className="feature-icon navy"><UserRound /></div><h3>Local Roots, Growing Reach</h3><p>From our beginnings in Warri to our branch in Asaba, we have reached more than 1,000 clients and continue to grow.</p><Checklist items={['Started in Warri', 'Now in Asaba', '1,000+ Clients Reached', 'Growing Across Delta State']} /></div><div className="verification-image"><DesignImage name="whyNerho3" alt="Hand holding the Nerho guarantor verification screen" /></div></article>
    </div>
  </div></section>
);
