import PricingCard from '@/components/PricingCard';
import { PRICING_PLANS } from '@/lib/constants';

export default function Pricing() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex justify-center md:justify-start items-center px-4 py-10 md:py-14 md:px-10 lg:py-16">
        <h3 className="text-h5 md:text-h4 lg:text-h3 inline-block w-full max-w-[250px] md:max-w-[350px] text-center md:text-start">
          Pricing that <span className="handwrite">scales</span> with you.
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-white/8 z-5">
        {PRICING_PLANS.map((pricingCard: PricingPlan) => (
          <PricingCard pricingCard={pricingCard} key={pricingCard.name} />
        ))}
      </div>
    </section>
  );
}
