import CustomButton from '@/components/CustomButton';
import { INTEGRATION_ICONS } from '@/lib/constants';
import { twMerge } from 'tailwind-merge';

export default function Integrations() {
  return (
    <section>
      <div className="flex flex-col items-center px-4 py-6 gap-y-4 md:py-8 lg:py-10 max-w-[700px] mx-auto">
        <h3 className="text-h6 md:text-h4 lg:text-h3 inline-block w-full text-center">
          Boost efficiency with powerful{' '}
          <span className="handwrite">integrations.</span>
        </h3>
        <p className="body-text-small-regular md:body-text-medium-regular text-center">
          Connect Ignitia with your existing systems in just a few clicks. From
          SSO providers to collaboration tools, integration has never been
          easier.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-[1px] p-[1px] bg-white/4 relative overflow-hidden">
        <div className="w-full h-full left-1/2 -translate-x-1/2 -bottom-3/4 absolute opacity-70 bg-gradient-to-b from-blue-500/20 to-white/5 rounded-full blur-[150px]" />
        <div className="md:col-start-2 md:col-span-3 md:row-start-3 md:row-span-2 lg:col-start-4 lg:col-span-4 lg:row-start-2 lg:row-span-1 w-full flex items-center justify-center bg-[#0B0C0C]">
          <CustomButton className="w-auto flex-none">
            View All Integrations
          </CustomButton>
        </div>
        {INTEGRATION_ICONS.map(
          ({
            icon: Icon,
            name,
            col,
            row,
            lgcol,
            lgrow,
            mdcol,
            mdrow,
          }: IntegrationItem) => (
            <div
              key={name}
              className="aspect-square flex justify-center items-center transition-all hover:bg-white/4 bg-[#0B0C0C] duration-1000 delay-300 overflow-hidden"
              data-mdcol={mdcol}
              data-mdrow={mdrow}
              data-lgcol={lgcol}
              data-lgrow={lgrow}
              style={{ gridColumnStart: col, gridRowStart: row }}
            >
              <Icon className="scale-50 md:scale-75 lg:scale-100" />
            </div>
          ),
        )}
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={`ph-${i}`}
            className="aspect-square flex justify-center items-center bg-[#0B0C0C]"
          />
        ))}
      </div>
    </section>
  );
}
