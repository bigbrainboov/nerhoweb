import React, { useState } from 'react';
import { X, Check, MapPin, Phone, Mail, QrCode, Send } from 'lucide-react';
import { AppStoreButtons } from './AppStoreButtons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Download the App Modal
export const DownloadModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setSentSuccess(true);
      setTimeout(() => {
        setSentSuccess(false);
        setPhoneNumber('');
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-2">
              Official Nerho App
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0B192C]">
              Download Nerho to Your Device
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Access verified solar products, home appliances, CCTV systems,
              and flexible repayment options on iOS and Android.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="pt-1">
            <AppStoreButtons />
          </div>

          {/* QR Code and SMS Link */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-20 h-20 bg-white p-2 rounded-xl border border-slate-200 shadow-2xs shrink-0 flex items-center justify-center">
              <QrCode className="w-full h-full text-slate-900" />
            </div>
            <div className="text-xs text-slate-600 space-y-1 text-center sm:text-left">
              <span className="font-semibold text-slate-900 block">
                Scan with your phone camera
              </span>
              <span>
                Point your mobile camera at this code to install the Nerho
                application directly from the store.
              </span>
            </div>
          </div>

          {/* Send SMS Link */}
          <form onSubmit={handleSendLink} className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              Or receive an SMS download link:
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="e.g. 0812 345 6789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
              >
                Send Link
              </button>
            </div>
            {sentSuccess && (
              <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-1">
                <Check className="w-3.5 h-3.5" /> SMS download link sent
                successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

// 2. Contact Us Modal
export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-[#0B192C]">
              Contact Nerho
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Connect with our customer advisory and support teams in Warri and
              Asaba.
            </p>
          </div>

          {/* Locations & Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                Warri Hub
              </div>
              <p className="text-slate-500">
                Airport Road, Warri, Delta State, Nigeria
              </p>
              <div className="flex items-center gap-1 text-blue-600 font-semibold pt-1">
                <Phone className="w-3 h-3" /> +234 812 345 6789
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                Asaba Hub
              </div>
              <p className="text-slate-500">
                Nnebisi Road, Asaba, Delta State, Nigeria
              </p>
              <div className="flex items-center gap-1 text-orange-600 font-semibold pt-1">
                <Phone className="w-3 h-3" /> +234 814 567 8901
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Busola Olukoya"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number / Email
              </label>
              <input
                type="text"
                placeholder="08123456789 or name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Message / Question
              </label>
              <textarea
                rows={3}
                placeholder="Ask about our solar systems, appliances, or flexible payment plans..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {submitted ? (
              <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" /> Thank you! Your message
                has been received. A Nerho representative will call you shortly.
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-3 bg-[#0B192C] hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" /> Send Message
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

// 3. Terms & Conditions Modal
export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative max-h-[85vh] flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold font-heading text-[#0B192C] mb-2">
          Terms &amp; Conditions
        </h3>
        <p className="text-xs text-slate-500 mb-4 pb-2 border-b border-slate-100">
          Purchase and payment information • Nerho
        </p>

        <div className="overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed pr-2">
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Products and services</h4>
            <p>Nerho offers solar and renewable energy solutions, electricals, fittings, plumbing, CCTV, and more. Contact our team to confirm availability and details for your purchase.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Pay Small Small</h4>
            <p>Pay With Partner and Pay With Zero let you make a percentage down payment and complete the balance over an agreed period. Pay With Partner is interest-based; Pay With Zero does not charge interest. Confirm the deposit percentage, repayment schedule, and full plan terms with Nerho before proceeding.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Pay Now</h4>
            <p>Choose Pay Now to pay the full purchase amount instead of using an instalment plan.</p>
          </section>
          <section>
            <h4 className="font-bold text-slate-900 mb-1">Purchase terms</h4>
            <p>For the terms that apply to your order, including delivery, installation, warranty, returns, and any fees, please contact Nerho. This overview is not a complete set of purchase terms.</p>
          </section>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Ask Nerho Anything Modal
export const AskAnythingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const q = query.toLowerCase();
    if (q.includes('solar') || q.includes('battery') || q.includes('inverter')) {
      setResponse(
        'Nerho provides tier-1 monocrystalline solar panels (400W–550W), 5kVA to 15kVA pure sine wave inverters, and high-cycle LiFePO4 lithium batteries with up to 5 years manufacturer warranty. You can finance any system with initial deposits starting at 50%.'
      );
    } else if (q.includes('pay') || q.includes('partner') || q.includes('zero') || q.includes('cost')) {
      setResponse(
        'We offer three payment paths: (1) Nerho Pay Now with instant delivery; (2) Nerho Pay With Partner (interest-based financing over 1–4 months); and (3) Nerho Pay With Zero (0% interest installments). Both require a verified guarantor.'
      );
    } else if (q.includes('warri') || q.includes('asaba') || q.includes('location') || q.includes('deliver')) {
      setResponse(
        'We have physical stores and fulfillment centres in Warri and Asaba, Delta State with door-to-door delivery and certified installation engineers servicing nationwide.'
      );
    } else {
      setResponse(
        `Thank you for asking: "${query}". Our support team has logged your inquiry. You can also chat live or browse the full product catalogue on the Nerho mobile app.`
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-left relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold font-heading text-[#0B192C] mb-2">
          Ask Nerho Anything
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Get fast answers about solar systems, appliances, warranties, or
          payment terms.
        </p>

        <form onSubmit={handleAsk} className="space-y-4">
          <input
            type="text"
            placeholder="Type your question (e.g. How do solar payment plans work?)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setResponse(null);
            }}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
          >
            Find Answer
          </button>
        </form>

        {response && (
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed animate-in fade-in">
            <span className="font-bold text-[#0B192C] block mb-1">
              Nerho Knowledge Base:
            </span>
            {response}
          </div>
        )}
      </div>
    </div>
  );
};
