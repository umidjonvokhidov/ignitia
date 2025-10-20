'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import CustomButton from './CustomButton';

const PricingCard = ({ pricingCard }: { pricingCard: PricingPlan }) => {
  const { name, description, features, href, price, isPopular } = pricingCard;
  const [isAnnualPlan, setIsAnnualPlan] = useState(false);

  return (
    <div
      className={twMerge(
        'flex flex-col items-start gap-y-12 p-6 md:p-8 justify-between h-full lg:p-10 lg:gap-y-16',
        isPopular &&
          'border-y md:border-x md:border-y-0 border-white/8 bg-white/4 backdrop-blur-[2px]',
      )}
    >
      <div className="flex items-start w-full flex-col gap-y-12 lg:gap-y-16">
        <div className="flex flex-col items-start gap-y-6 w-full">
          <div className="flex flex-col items-start w-full relative">
            <h4 className="text-h5 lg:text-h4 font-normal">{name}</h4>
            <h5 className="text-h5 lg:text-h4 font-normal">
              $
              {(!isAnnualPlan
                ? price
                : ((price as number) * 0.15 + (price as number)).toFixed()
              ).toString()}
              <span className="text-neutral-500">/month</span>
            </h5>
            {isPopular && (
              <span className="absolute top-0 right-0 bg-[#B8DFF9] rounded-full py-1 px-3 text-neutral-950 text-sm handwrite not-italic">
                Popular
              </span>
            )}
          </div>
          <div className="flex items-center gap-x-2">
            <Label htmlFor={name} className="text-sm text-neutral-500">
              Billed yearly
            </Label>
            <Switch
              id={name}
              checked={isAnnualPlan}
              onCheckedChange={() => setIsAnnualPlan(!isAnnualPlan)}
            />
          </div>
        </div>
        <p className="body-text-small-medium tracking-wide">{description}</p>
        <ul className="flex flex-col items-start gap-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="body-text-small-regular list-inside"
              style={{ listStyleImage: "url('/icons/check.svg')" }}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <CustomButton
        type={isPopular ? 'primary' : 'secondary'}
        className="!w-full min-h-12 h-12 max-h-12"
        href={href}
      >
        Get Started
      </CustomButton>
    </div>
  );
};

export default PricingCard;
