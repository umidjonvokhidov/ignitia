import { PRICING_PLAN_FEATURES } from '@/lib/constants';
import InfoIcon from "@/public/icons/info.svg"

export default function ComparePlan() {
  return (
    <section className="hidden md:block">
      <table className="w-full border-collapse">
        <thead>
          <tr className='h-20'>
            <th className="border border-white/8 p-2 text-left text-h6 px-10 min-w-[250px]">Features</th>
            <th className="border border-white/8 p-2 text-center bg-white/4 md:min-w-[120px] lg:min-w-[200px]">Personal</th>
            <th className="border border-white/8 p-2 text-center bg-white/4 md:min-w-[120px] lg:min-w-[200px]">Launch</th>
            <th className="border border-white/8 p-2 text-center bg-white/4 md:min-w-[120px] lg:min-w-[200px]">Scale</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_PLAN_FEATURES.features.map((feature) => (
            <tr key={feature.name} className='even:bg-white/4 h-14'>
              <td className="border border-white/8 min-w-[250px] h-14 pl-10 pr-6 py-4 gap-x-2">
                <div className="flex items-center justify-between w-full">
                  <span className='w-full'>{feature.name}</span> 
                  <InfoIcon className="object-contain"/>
                </div>
              </td>
              <td className="border border-white/8 text-center md:min-w-[120px] lg:min-w-[200px]">
                {typeof feature.personal === 'boolean'
                  ? feature.personal
                    ? '✓'
                    : ''
                  : feature.personal}
              </td>
              <td className="border border-white/8 text-center md:min-w-[120px] lg:min-w-[200px]">
                {typeof feature.launch === 'boolean'
                  ? feature.launch
                    ? '✓'
                    : ''
                  : feature.launch}
              </td>
              <td className="border border-white/8 text-center md:min-w-[120px] lg:min-w-[200px]">
                {typeof feature.scale === 'boolean'
                  ? feature.scale
                    ? '✓'
                    : ''
                  : feature.scale}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
