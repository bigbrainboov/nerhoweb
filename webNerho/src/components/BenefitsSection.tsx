import React from 'react';
import { DesignImage } from './DesignImage';

const plans = [
  { name: 'payWithParthner', title: 'Nerho Pay With Partner', alt: 'Nerho Pay With Partner payment screen', description: 'Get what you need with an initial percentage down payment, then pay the balance over an agreed period. Pay With Partner is an interest-based Pay Small Small plan.' },
  { name: 'payNow', title: 'Nerho Pay Now', alt: 'Customer enjoying Nerho Pay Now', description: 'Prefer to pay in full? Pay Now lets you make one complete payment for your purchase, with no remaining instalments to manage.' },
  { name: 'payWithZero', title: 'Nerho Pay With Zero', alt: 'Nerho Pay With Zero payment screen', description: 'Start with a percentage down payment and complete the balance over an agreed period, without interest. A Pay Small Small option for anyone who prefers interest-free payments, including our Muslim brothers and sisters.' },
];
export const BenefitsSection: React.FC<{ onOpenDownloadModal: () => void }> = ({ onOpenDownloadModal }) => (
  <section className="design-section benefits-section"><div className="page-container"><div className="benefits-panel">
    <div className="section-heading centered"><span className="section-label">Nerho Benefits</span><h2>Payment Options Designed To Fit Any Budget</h2><button className="download-button" onClick={onOpenDownloadModal}>Download the app</button></div>
    <div className="benefits-grid">{plans.map(plan => <article key={plan.name}><div className={`payment-image ${plan.name === 'payNow' ? 'payment-photo' : ''}`}><DesignImage name={plan.name} alt={plan.alt} sizes="(max-width: 767px) 85vw, 30vw" /></div><h3>{plan.title}</h3><p>{plan.description}</p></article>)}</div>
  </div></div></section>
);
