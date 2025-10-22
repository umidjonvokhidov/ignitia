import CustomButton from '@/components/CustomButton';
import { FRAMEWORKS } from '@/lib/constants';
import SocialProof from './SocialProof';

export default function Hero() {
  return (
    <header className="w-full">
      <div className="flex flex-col justify-center items-center py-6 px-4 md:p-10 w-full gap-y-6 md:gap-y-10 hero">
        <div className='flex flex-col items-center gap-y-4 md:gap-y-6'>
          <div className="flex items-center gap-x-2 p-1 rounded-full bg-white/4 border border-white/8">
            <span className="body-text-small-semi-bold text-white py-1 px-3 rounded-full bg-[#377AFB]">
              NEW
            </span>
            <span className="body-text-small-medium text-white mr-2 text-center">
              v1.2 Beta is available
            </span>
          </div>
          <h1 className='text-h5 md:text-h3 lg:text-h2 max-w-[596px] wrap-break-word inline-block text-center justify-center'>Simplify and optimize your <span className='handwrite'>user experience.</span></h1>
        </div>
        <div className='flex flex-col items-center gap-y-4 md:gap-y-6'>
          <div className='flex items-center justify-center gap-1 md:gap-2 flex-wrap'>
            {FRAMEWORKS.map(({icon: Icon,name}: Framework) => (
              <div className='bg-white/4 border border-white/8 rounded-md p-0.5' key={name}>
                <Icon className="text-neutral-500" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
            <CustomButton className='h-8 md:h-11 lg:h-12'>Try for Free</CustomButton>
            <CustomButton className='h-8 md:h-11 lg:h-12' type="secondary">Learn More</CustomButton>
          </div>
        </div>
      </div>
      <SocialProof />
    </header>
  );
}
