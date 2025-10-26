import CustomButton from '@/components/CustomButton';
import { COMPANY_LIST } from '@/lib/constants';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function NotFound() {
  return (
    <main className="relative mx-auto w-full grid grid-cols-[40px_1fr_40px] md:grid-cols-[80px_1fr_80px] xl:grid-cols-[120px_1fr_120px] max-w-[1536px] h-screen overflow-x-hidden">
      <div className="h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-x border-white/8" />
      <div className="w-full min-w-0 flex flex-col border-y my-auto border-white/8 relative">
        <div className="w-[1018px] h-[563px] absolute blur-[150px] opacity-70 bg-[linear-gradient(180deg,rgba(55,122,251,0.15)_25%,rgba(255,255,255,0.04)_100%)] top-1/2 left-1/2 -translate-1/2 -z-1" />
        <div className="relative h-full">
          <Image
            src="/images/404-bg.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-center  absolute top-1/2 -translate-y-1/2 -z-5"
            alt="404"
          />
          <div className="flex flex-col items-center h-full w-full py-10 px-4 md:p-20 gap-y-5 md:gap-y-10">
            <div className="flex flex-col items-center gap-y-4 py-9">
              <h5 className="handwrite text-white text-xl md:text-2xl">
                Ooops!
              </h5>
              <h1 className="text-h4 md:text-h3 lg:text-h2 max-w-[600px] text-center">
                This is not the page you’re{' '}
                <span className="handwrite">looking for</span> 👀
              </h1>
              <p className="! body-text-medium-regular text-center max-w-[460px]">
                We can’t find that page, but you can always chat with our team
                if you have a question or need support.
              </p>
            </div>
            <CustomButton href="/" className="h-12 w-auto">
              Back to Home
            </CustomButton>
          </div>
        </div>
        <div className="relative w-full -z-2 py-10 border-y border-white/8">
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
      </div>
      <div className="h-full relative w-full bg-[url(/icons/Pattern.svg)] bg-[length:120px_120px] bg-repeat border-x border-white/8" />
    </main>
  );
}
