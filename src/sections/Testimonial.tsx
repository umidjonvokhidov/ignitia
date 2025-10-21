import { CONTACT_SECTIONS, TESTIMONIALS } from '@/lib/constants';
import TestimonialCard from '@/components/TestimonialCard';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export default function Testimonial() {
  return (
    <section>
      <div className="flex flex-col items-center px-4 py-6 md:py-8 lg:py-10 max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto">
        <h3 className="text-h5 md:text-h4 lg:text-h3 inline-block w-full text-center">
          What our client <span className="handwrite">says.</span>
        </h3>
      </div>
      <div className="flex flex-col gap-y-4 p-4 visible md:hidden border-y border-white/8">
        {TESTIMONIALS.map((Testimonial: Testimonial) => (
          <TestimonialCard key={Testimonial.name} Testimonial={Testimonial} />
        ))}
      </div>
      <div className="w-full overflow-hidden hidden md:block mx-auto relative py-6 md:py-10 border-y border-white/8">
        <div className="bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(12,_12,_12,_0)_0%,_rgba(11,12,12,1)_100%)] mask-alpha absolute inset-0 z-2 pointer-events-none" />
        <Marquee className="w-full" autoFill speed={25} gradient={false}>
          <div className="flex gap-x-4 p-2">
            {TESTIMONIALS.map((Testimonial: Testimonial) => (
              <TestimonialCard
                className="max-w-[360px]"
                key={Testimonial.name}
                Testimonial={Testimonial}
              />
            ))}
          </div>
        </Marquee>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {CONTACT_SECTIONS.map(
          ({ content, icon: Icon, title, href }: ContactSectionItem) => (
            <div
              className="flex flex-col gap-y-3 p-6 md:p-8 lg:p-10 border-b border-white/8 last:border-none md:border-r"
              key={title}
            >
              <div className="flex items-center gap-x-2">
                <Icon className="text-white" />
                <span>{title}</span>
              </div>
              {!href ? (
                <p className="body-text-small-regular md:body-text-medium-regular wrap-anywhere">
                  {content}
                </p>
              ) : (
                <Link
                  href={href}
                  className="body-text-small-regular md:body-text-medium-regular text-neutral-500 underline"
                >
                  {content}
                </Link>
              )}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
