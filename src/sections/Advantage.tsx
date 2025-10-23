import { PRICING_ADVANTAGES } from '@/lib/constants';

export default function Advantage() {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-center p-6 md:p-8 lg:p-10">
        <h2 className="text-h5 md:text-h4 lg:text-h3 text-center">
          All plans <span className="handwrite">include.</span>
        </h2>
      </div>
      <div className="grid md:grid-rows-3 md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-0.25 bg-white/8 border-t border-white/8">
        {PRICING_ADVANTAGES.map(
          ({ description, icon: Icon, title }: PricingAdvantage) => (
            <div
              key={title}
              className="flex flex-col items-start bg-[#0B0C0C] p-6 md:p-8 group lg:p-10 gap-y-3 relative"
            >
              <div className='group-odd:bg-white/4 absolute w-full h-full top-0 left-0'/>
              <div className="p-3 border border-white/8 bg-white/4 rounded-[12px]">
                <Icon />
              </div>
              <h3 className="body-text-large-semi-bold">{title}</h3>
              <p className="body-text-medium-regular">{description}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
