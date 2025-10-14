'use client';

import { SOCIAL_PROOF_LOGOS } from '@/lib/constants';
import Marquee from 'react-fast-marquee';

export default function SocialProof() {
  return (
    <div className="w-full max-w-[calc(100vw-80px)] md:max-w-[calc(100vw-160px)] xl:max-w-[calc(100vw-240px)] overflow-x-hidden mx-auto relative py-6 md:py-10">
      <div className="bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(12,_12,_12,_0)_0%,_rgba(11,12,12,1)_100%)] mask-alpha absolute w-full h-full top-0 z-2" />
      <Marquee className="w-full overflow-hidden" autoFill speed={25}>
        <div className="flex items-center gap-x-4 px-2">
          {SOCIAL_PROOF_LOGOS.map(({ icon: Icon, name }: SocialProof) => (
            <div
              className="w-[100px] h-[60px] md:w-[140px] md:h-[80px] flex items-center justify-center border border-white/8 rounded-lg"
              key={name}
            >
              <Icon className="text-neutral-500 scale-75 md:scale-100" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
