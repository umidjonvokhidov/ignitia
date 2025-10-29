import CustomButton from '@/components/CustomButton';
import { ABOUT_CARDS } from '@/lib/constants';
import Logo from '@/public/icons/Logo.svg';
import { twMerge } from 'tailwind-merge';

export default function About() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col items-center gap-y-6 p-6 md:p-8 md:gap-y-8 lg:p-10 lg:gap-y-10 relative">
        <div className="w-full h-full bg-[linear-gradient(180deg,rgba(55,122,251,0.15)_25%,rgba(255,255,255,0.04)_100%)] blur-[150px] absolute -z-10 top-0 opacity-70 rounded-[1018px]" />
        <Logo />
        <p className="text-neutral-500 text-h6 md:text-h5 lg:text-h3 text-center max-w-[1120px]">
          At Ignitia, we redefine identity and access management with a
          scalable, modular platform tailored for seamless UX and deployment
          adaptability. Our pay-as-you-go model ensures you get exactly what you
          need.
        </p>
      </div>
      <div className="relative border-t border-white/8 flex justify-center group">
        <div className="rounded-[1018px] w-full h-full opacity-70 bg-[linear-gradient(180deg,rgba(55,122,251,0.15)_25%,rgba(255,255,255,0.04)_100%)] blur-[150px] absolute top-0 -z-5" />
        <div className="invisible w-full h-full bg-white/1 backdrop-blur-md absolute z-7 group-hover:opacity-100 opacity-0 md:group-hover:visible transition-all duration-500 md:flex justify-center items-center">
          <div>
            <CustomButton type="secondary" className="w-auto flex-auto" href='/integrations'>
              Meet Our Customers
            </CustomButton>
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center border-x border-white/8">
          {ABOUT_CARDS.map(
            ({ logo: Logo, description, title }: AboutCard, index: number) => (
              <div
                key={title}
                className={twMerge(
                  'flex flex-col gap-y-6 items-center p-6 md:p-8 lg:p-10 md:max-w-[240px] w-full',
                  index != 0 &&
                    'border-t border-white/8 md:border-l md:border-t-0',
                )}
              >
                <Logo />
                <h3>{title}</h3>
                <p className="body-text-medium-regular text-center">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
