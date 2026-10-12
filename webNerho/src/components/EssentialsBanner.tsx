import React from 'react';
import { AppStoreButtons } from './AppStoreButtons';

export const EssentialsBanner: React.FC = () => {
  return (
    <section className="design-section essentials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="essentials-panel">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            {/* Left Column Copy */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B192C] tracking-tight leading-[1.15]">
                Get the essentials,
                <br />
                without compromise.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">From solar and renewable energy to electricals, fittings, plumbing, and CCTV, find what your home or business needs with Nerho. Pay in full, or start with a percentage down payment and spread the balance with a Pay Small Small plan.</p>

              <div className="pt-2">
                <AppStoreButtons />
              </div>
            </div>

            {/* Right Column Visual Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="essentials-image">
                <img
                  src="/images/essentials.webp"
                  alt="Nerho App Essentials Catalogue on Mobile"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
