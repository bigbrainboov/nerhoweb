import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section className="design-section journey-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Title and Progress Bar */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B192C] tracking-tight mb-4">
            Our Journey
          </h2>

        </div>

        {/* Two Paragraphs with exact editorial styling */}
        <div className="journey-copy space-y-6 mb-12">
          <p>Nerho began in Warri, Delta State, with a focus on helping people access the essentials for their homes and businesses. From solar and renewable energy to electricals, fittings, plumbing, and CCTV, our range brings practical solutions together in one place.</p>
          <p>Today, we have reached more than 1,000 clients and expanded with a branch in Asaba. That growth is an exciting step in our journey. With Pay Small Small options, including Pay With Partner and interest-free Pay With Zero, we are making it easier for customers to spread the cost of what they need.</p>
        </div>

        {/* 3 Metric Cards matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Metric 1: 1,000+ Clients reached */}
          <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="mb-6">
              {/* Overlapping Avatars Cluster */}
              <img src="/images/customers.webp" alt="Nerho customers" width="120" height="42" loading="lazy" />
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B192C] tracking-tight mb-2">
                1,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Clients reached
              </div>
            </div>
          </div>

          {/* Metric 2: 2 branches Warri and Asaba, Delta State */}
          <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="mb-6">
              {/* Orange Timer Icon */}
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#EA580C]">
                <MapPin className="w-6 h-6 stroke-[1.8]" />
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B192C] tracking-tight mb-2">
                2 branches
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                Warri and Asaba, Delta State
              </div>
            </div>
          </div>

          {/* Metric 3: 100% Committed to the growth of Nigeria (Solid Royal Blue) */}
          <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-between shadow-md hover:bg-blue-700 transition-colors">
            <div className="mb-6">
              {/* Trending Chart Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-white">
                <TrendingUp className="w-6 h-6 stroke-[2.2]" />
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium">
                Committed to the growth of Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
