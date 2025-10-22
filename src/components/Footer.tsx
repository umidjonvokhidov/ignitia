import {
  FOOTER_LEGAL_LINKS,
  FOOTER_SECTIONS,
  FOOTER_SOCIAL_LINKS,
} from '@/lib/constants';
import CustomButton from './CustomButton';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full">
      <div className="flex flex-col items-start lg:items-center justify-between border border-white/8 gap-y-6 lg:flex-row bg-white/4 p-6 w-full">
        <div className="flex flex-col items-start gap-y-2 lg:max-w-[430px]">
          <h6 className="text-white">
            Start your 30-day <span className="handwrite">free trial.</span>
          </h6>
          <p>
            Discover the easiest way to streamline your workflow and boost
            productivity.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
          <CustomButton type="secondary">Learn More</CustomButton>
          <CustomButton>Get Started</CustomButton>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 md:p-8 lg:gap-10 lg:p-10">
        {FOOTER_SECTIONS.map(({ title, links }: FooterSection) => (
          <div className="flex flex-col gap-y-4 items-start" key={title}>
            <h6 className="body-text-small-semi-bold">{title}</h6>
            <ul className="flex flex-col items-start gap-y-2">
              {links.map(({ name, href, isNew }: FooterLink) => (
                <li
                  className="body-text-medium-medium text-neutral-500 flex items-center gap-x-1"
                  key={name}
                >
                  <Link
                    href={href}
                    className="hover:underline focus:text-neutral-50 leading-6 underline-offset-4 transition-all hover:underline-offset-8 disabled:text-neutral-300 hover:text-white"
                  >
                    {name}
                  </Link>
                  {isNew && (
                    <span className="px-1.5 py-0.5 rounded-md bg-[#B8DFF9] handwrite !text-neutral-950">
                      new
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between items-center lg:flex-row border-y border-white/8 p-6 md:p-8 lg:p-10 gap-y-6">
        <div className="flex items-center gap-x-3">
          {FOOTER_SOCIAL_LINKS.map(
            ({ href, icon: Icon, name }: FooterSocialLink) => (
              <Link
                href={href}
                key={name}
                aria-label={name}
                className="p-2.5 rounded-md border border-white/8 group transitio transition-all hover:bg-neutral-50"
              >
                <Icon className="w-5 h-5 group-hover:text-neutral-950" />
              </Link>
            ),
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:divide-x md:divide-white/8">
          {FOOTER_LEGAL_LINKS.map(({ name, href }: FooterLegalLink) => (
            <Link
              href={href}
              key={name}
              className="text-body-medium-regular text-neutral-500 hover:underline underline-offset-4 hover:text-white transition-all hover:underline-offset-8 md:pr-3.5 leading-4"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center md:flex-row border-y border-white/8 p-6 md:p-8 lg:p-10 gap-y-6">
        <Link href="/">
          <Image
            src="icons/Logo-full.svg"
            alt="Logo"
            width={0}
            height={0}
            className="w-[90px] h-[32px] object-contain md:w-[115px] md:h-[36px] lg:mr-[28px]"
          />
        </Link>
        <p>© 2025 Ignitia.</p>
      </div>
    </footer>
  );
};

export default Footer;
