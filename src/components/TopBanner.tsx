import ArrowRight from '@/public/icons/arrow-right.svg';

export default function TopBanner() {
  return (
    <div className="flex items-center justify-cente px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6">
      <div className="flex items-center justify-between px-6 py-4 w-full rounded-sm bg-white/4 border border-white/8">
        <h1 className="body-text-small-medium w-full">
          Our startup program is live — enjoy 50% off today!
        </h1>
        <ArrowRight className="text-white size-5" />
      </div>
    </div>
  );
}
