import { ABOUT_FEATURES, COMPANY_LIST } from '@/lib/constants';
import Marquee from 'react-fast-marquee';

export default function AboutMain() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col items-center gap-y-6 p-6 md:p-8 md:gap-y-8 lg:p-10 lg:gap-y-10 relative">
        <p className="text-neutral-500 text-h6 md:text-h5 lg:text-h3">
          At Ignitia, we redefine identity and access management with a
          scalable, modular platform tailored for seamless UX and deployment
          adaptability. Our pay-as-you-go model ensures you get exactly what you
          need.
        </p>
      </div>
      <div className="relative w-full py-10 border-y border-white/8">
        <div className="bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(12,_12,_12,_0)_0%,_rgba(11,12,12,1)_100%)] mask-alpha absolute inset-0 z-2 pointer-events-none w-full h-full" />
        <Marquee className="w-full" autoFill speed={25} gradient={false}>
          <div className="grid grid-cols-6 w-full gap-4 px-2">
            {COMPANY_LIST.map((CompanyIcon, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-[12px] border border-white/8 bg-white/4 w-full min-w-[140px] h-[80px]"
              >
                <CompanyIcon />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 relative overflow-visible">
        <div className="w-[1018px] h-[563px] top-2/4 left-1/4 absolute opacity-70 bg-gradient-to-b from-blue-500/20 to-white/5 rounded-full blur-[150px] -z-3" />
        {ABOUT_FEATURES.map(
          ({ description, icon: Icon, title }: AboutFeature) => (
            <div
              key={title}
              className="flex flex-col gap-y-3 p-6 md:p-8 lg:p-10 not-last:border-b md:not-last:border-b-0 md:not-last:border-r border-white/8"
            >
              <Icon />
              <h3 className="body-text-large-semi-bold">{title}</h3>
              <p>{description}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
