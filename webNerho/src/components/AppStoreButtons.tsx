import React from 'react';
import { appLinks } from '../data/appLinks';

interface AppStoreButtonsProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  className = '',
  variant = 'dark',
}) => {
  const bgClasses =
    variant === 'dark'
      ? 'bg-[#102342] text-white hover:bg-[#1d3761] border border-transparent'
      : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200';

  const subtextClass = variant === 'dark' ? 'text-white' : 'text-[#1d3761]';

  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      {/* Apple Store Button */}
      <a
        href={appLinks.ios}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-98 cursor-pointer ${bgClasses}`}
      >
        {/* Apple Logo SVG */}
        <svg className="w-6 h-6 shrink-0 fill-current" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.02.63-2.67 1.38-.56.64-1.05 1.7-0.92 2.73 1.03.08 2.06-.51 2.67-1.24Z" />
        </svg>
        <div className="text-left leading-tight">
          <span className={`block text-[10px]  font-medium ${subtextClass}`}>
            Download on the
          </span>
          <span className="block text-lg font-semibold tracking-tight">
            App Store
          </span>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href={appLinks.android}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-98 cursor-pointer ${bgClasses}`}
      >
        {/* Google Play Logo SVG */}
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M3.6 1.4c-.3.3-.4.8-.4 1.4v18.4c0 .6.1 1.1.4 1.4l10.3-10.6L3.6 1.4Z"
          />
          <path
            fill="#34A853"
            d="M17.8 7.6 13.9 12l3.9 4.4 3.8-2.2c1.1-.6 1.1-1.6 0-2.2l-3.8-2.4Z"
          />
          <path
            fill="#FBBC04"
            d="m13.9 12 3.9-4.4L4.9.4c-.6-.4-1.1-.2-1.3 1l10.3 10.6Z"
          />
          <path
            fill="#EA4335"
            d="M13.9 12 3.6 22.6c.2 1.2.7 1.4 1.3 1l12.9-7.2L13.9 12Z"
          />
        </svg>
        <div className="text-left leading-tight">
          <span className={`block text-[10px]  font-medium ${subtextClass}`}>
            Get It On
          </span>
          <span className="block text-lg font-semibold tracking-tight">
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
};
