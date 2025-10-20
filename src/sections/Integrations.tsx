'use client';

import CustomButton from '@/components/CustomButton';
import { INTEGRATION_ICONS } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Integrations() {
  const [mounted, setMounted] = useState(false);
  const mdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const lgScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => setMounted(true), []);
  const count = !mounted ? 13 : lgScreen ? 13 : mdScreen ? 11 : 11;

  return (
    <section>
      <div className="flex flex-col items-center px-4 py-6 gap-y-4 md:py-8 lg:py-10 max-w-[700px] mx-auto">
        <h3 className="text-h6 md:text-h4 lg:text-h3 inline-block w-full text-center">
          Boost efficiency with powerful{' '}
          <span className="handwrite">integrations.</span>
        </h3>
        <p className="body-text-small-regular md:body-text-medium-regular text-center">
          Connect Ignitia with your existing systems in just a few clicks. From
          SSO providers to collaboration tools, integration has never been
          easier.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-[1px] p-[1px] bg-white/4 relative ">
        <div className="w-full h-full left-1/2 -translate-x-1/2 -bottom-3/4 absolute opacity-70 bg-gradient-to-b from-blue-500/20 to-white/5 rounded-full blur-[150px]" />
        <div className="w-full h-full left-1/2 -translate-x-1/2 -top-3/4 absolute opacity-70 bg-gradient-to-b from-blue-500/20 to-white/5 rounded-full blur-[150px]" />
        <div className="col-start-1 row-start-5 col-span-3 row-span-1 md:col-start-2 md:col-span-3 md:row-start-3 md:row-span-2 lg:col-start-4 lg:col-span-4 lg:row-start-2 lg:row-span-1 w-full flex items-center justify-center bg-[#0B0C0C] h-[150px] md:h-full">
          <CustomButton className="w-auto flex-none">
            View All Integrations
          </CustomButton>
        </div>
        {INTEGRATION_ICONS.map(
          ({
            icon: Icon,
            name,
            col,
            row,
            lgcol,
            lgrow,
            mdcol,
            mdrow,
          }: IntegrationItem) => (
            <div
              key={name}
              className="aspect-square flex justify-center items-center transition-all bg-[#0B0C0C] duration-500 overflow-hidden grid-item"
              style={
                {
                  ['--col' as any]: col,
                  ['--row' as any]: row,
                  ['--mdcol' as any]: mdcol,
                  ['--mdrow' as any]: mdrow,
                  ['--lgcol' as any]: lgcol,
                  ['--lgrow' as any]: lgrow,
                } as React.CSSProperties
              }
            >
              <Icon className="" />
            </div>
          ),
        )}
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={`ph-${i}`}
            className="aspect-square flex justify-center items-center bg-[#0B0C0C]"
          />
        ))}
      </div>
    </section>
  );
}
