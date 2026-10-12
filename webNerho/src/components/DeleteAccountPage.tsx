import React, { useState } from 'react';
import { PolicyLayout } from './PolicyLayout';

export const DeleteAccountPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const body = `Hello Nerho team,\n\nPlease delete my Nerho account and its associated personal data.\n\nRegistered email: ${email}\n${phone ? `Registered phone: ${phone}\n` : ''}\nPlease confirm when my request has been completed.`;
  const emailLink = `mailto:nerho@gmail.com?subject=${encodeURIComponent('Nerho account and data deletion request')}&body=${encodeURIComponent(body)}`;

  return (
    <PolicyLayout title="Delete Your Nerho Account">
      <section><h2>Request account and data deletion</h2><p>You can request deletion without signing into Nerho or reinstalling the app. Email <a href="mailto:nerho@gmail.com?subject=Nerho%20account%20deletion%20request">nerho@gmail.com</a> from your registered email address, with the subject “Nerho account deletion request”. Ask our team to delete your account and associated personal information.</p><p>Nerho handles requests immediately after receiving them. Never include your password in your request.</p></section>
      <section><h2>Prepare your request</h2><p>Use the form below to prepare an email, or send one directly from your email app. You must send the email to submit your request.</p>
        <form className="deletion-form" onSubmit={event => { event.preventDefault(); window.location.href = emailLink; }}>
          <label htmlFor="deletion-email">Registered email address</label>
          <input id="deletion-email" name="email" type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} required maxLength={254} />
          <label htmlFor="deletion-phone">Registered phone number (optional)</label>
          <input id="deletion-phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} maxLength={30} />
          <label className="deletion-confirm"><input type="checkbox" checked={acknowledged} onChange={event => setAcknowledged(event.target.checked)} required /><span>I want to request deletion of my Nerho account and associated personal information.</span></label>
          <button type="submit" className="download-button">Open deletion request email</button>
        </form>
      </section>
      <section><h2>What your request covers</h2><p>Nerho removes your account and its associated email address, password credentials, phone number, and address from its database. Those account records are not retained after deletion. Payment records held independently by Paystack are governed by its <a href="https://paystack.com/terms" target="_blank" rel="noopener noreferrer">Privacy &amp; Cookie Policy</a> and may be retained.</p><p>Read our <a href="/privacy-policy">Privacy Policy</a> or visit <a href="/support">App Support</a> if you need help.</p></section>
    </PolicyLayout>
  );
};
