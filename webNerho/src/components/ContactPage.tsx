import React, { useState } from 'react';
import { Check, Copy, Mail, MessageCircle, Smartphone } from 'lucide-react';
import { contactDetails, locations } from '../data/contact';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState('');

  const copy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setStatus(`${value} copied to clipboard.`);
    } catch {
      setStatus(`Copy is unavailable. Please select and copy ${value}.`);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-intro page-container" aria-labelledby="contact-heading">
        <span className="section-label">Contact Us</span>
        <h1 id="contact-heading">Get In Touch With Us</h1>
        <p>Visit one of our locations below to connect with us and discover Nerho in person.</p>
        <div className="location-grid">
          {locations.map(location => (
            <article key={location.id} className="location-card">
              <img src={`/images/${location.id}.webp`} srcSet={`/images/${location.id}-480.webp 480w, /images/${location.id}.webp 848w`} sizes="(max-width: 767px) calc(100vw - 40px), 424px" width="424" height="456" alt={location.alt} loading="eager" decoding="async" />
              <div className="location-content">
                <h2>{location.title}</h2>
                <p>{location.address}</p>
                <a className="maps-button" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${location.title} in Google Maps`}>View In Maps</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-team page-container" aria-labelledby="team-heading">
        <h2 id="team-heading">Connect With The Nerho Team.</h2>
        <div className="contact-methods">
          {contactDetails.map(detail => {
            const Icon = detail.id === 'whatsapp' ? MessageCircle : detail.id === 'phone' ? Smartphone : Mail;
            const href = detail.id === 'email'
              ? `mailto:${detail.value}`
              : detail.id === 'whatsapp'
                ? `https://wa.me/${detail.value.replace(/\D/g, '')}`
                : `tel:${detail.value.replace(/\s/g, '')}`;
            return (
              <article className={`contact-method ${detail.id}`} key={detail.id}>
                <Icon className="contact-icon" aria-hidden="true" />
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
                <div className="contact-value"><span><a href={href} target={detail.id === 'whatsapp' ? '_blank' : undefined} rel={detail.id === 'whatsapp' ? 'noopener noreferrer' : undefined}>{detail.value}</a></span><button type="button" onClick={() => copy(detail.id, detail.value)} aria-label={`Copy ${detail.title}`} title={`Copy ${detail.title}`}>{copied === detail.id ? <Check size={19} /> : <Copy size={19} />}</button></div>
              </article>
            );
          })}
        </div>
        <p className="copy-status" role="status" aria-live="polite">{status}</p>
      </section>
    </div>
  );
};
