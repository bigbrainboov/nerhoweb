import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DesignImage } from './DesignImage';

interface ServicesSectionProps {
  onOpenDownloadModal: () => void;
}

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  imgSrc: string;
}

const services: ServiceItem[] = [
  {
    id: 'solar',
    title: 'Solar Solutions',
    badge: 'Reliable Power Solutions',
    description:
      'Solar products and renewable energy solutions to help you power your home or business. Explore your options with Nerho.',
    imgSrc: '/serviceImg1.png',
  },
  {
    id: 'cctv',
    title: 'CCTV Solutions',
    badge: 'Smart Security Solutions',
    description:
      'Keep an eye on what matters with CCTV and security solutions for your home, shop, or business.',
    imgSrc: '/serviceImg2.png',
  },
  {
    id: 'appliances',
    title: 'Reliable Appliances',
    badge: 'Quality Home Appliances',
    description:
      'Find electrical appliances and everyday essentials to equip your space and make daily life easier.',
    imgSrc: '/serviceImg4.png',
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    badge: 'Professional Plumbing Services',
    description:
      'Explore plumbing products and fittings for your building, renovation, and everyday maintenance needs.',
    imgSrc: '/serviceImg5.png',
  },
  {
    id: 'community-solar',
    title: 'Community Solar Solutions',
    badge: 'Community Solar Solutions',
    description:
      'Explore solar and renewable energy options for shared spaces, homes, and businesses.',
    imgSrc: '/serviceImg6.png',
  },
  {
    id: 'property-access',
    title: 'Electricals & Fittings',
    badge: 'Simplified Property Access',
    description:
      'Bring your space together with electricals and fittings for homes and businesses. Visit us in Warri or Asaba to explore the range.',
    imgSrc: '/serviceImg7.png',
  },
  {
    id: 'pro-services',
    title: 'Trusted Professional Services',
    badge: 'Trusted Professional Services',
    description:
      'From power to plumbing and security, talk to Nerho about the products and services your next project needs.',
    imgSrc: '/serviceImg8.png',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenDownloadModal,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement | null;
      const step = (card?.offsetWidth ?? 320) + 24;
      const scrollAmount = direction === 'left' ? -step : step;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="design-section services-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-4">
              <span className="text-xs sm:text-sm font-semibold text-blue-600">
                Nerho Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B192C] tracking-tight leading-tight mb-6">
              Why Switch Between Apps When You Can Have It All Here?
            </h2>
            <button
              type="button"
              onClick={onOpenDownloadModal}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 active:scale-98 shadow-sm transition-all whitespace-nowrap cursor-pointer"
            >
              Download the app
            </button>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden md:flex items-center gap-3 self-end md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-50 active:scale-95 transition-all cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile service list and desktop carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card shrink-0 snap-start flex flex-col text-left"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-slate-100 mb-5 shadow-sm border border-slate-100/80 group-hover:shadow-md transition-shadow">
                <DesignImage name={service.imgSrc.replace('/', '').replace('.png', '')} alt={service.title} sizes="(max-width: 767px) calc(100vw - 40px), 389px" className="w-full h-full object-cover" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold font-heading text-[#0B192C] mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
