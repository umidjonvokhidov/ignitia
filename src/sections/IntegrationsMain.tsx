import CustomButton from '@/components/CustomButton';
import { INTEGRATION_CATEGORIES, INTEGRATIONS } from '@/lib/constants';
import ExternalLinkIcon from '@/public/icons/external-link.svg';

const IntegrationsMain = () => {
  return (
    <section>
      <div className="p-4 md:p-8 lg:p-10 flex flex-col gap-y-4 items-center border-b border-white/8 relative overflow-visible">
        <h3 className="text-h5 md:text-h4 lg:text-h3 max-w-[600px] text-center">
          Partners <span className="handwrite">integrations.</span>
        </h3>
        <p className="sm:body-text-small-regular md:body-text-medium-regular text-center max-w-[630px]">
          Connect Ignitia with your existing systems in just a few clicks. From
          SSO providers to collaboration tools, integration has never been
          easier.
        </p>
      </div>
      <div className="flex items-start relative scroll-smooth">
        <aside className="hidden md:flex flex-col sticky top-[92px] min-w-[250px] lg:min-w-[320px]">
          <div className="p-6 lg:p-10 flex flex-col">
            <div className="flex flex-col items-start">
              {INTEGRATION_CATEGORIES.map((category) => (
                <button
                  className="body-text-medium-regular text-start px-4 ease-in text-neutral-500 border-l-[3px] border-transparent hover:border-[#377AFB] hover:body-text-medium-semi-bold hover:text-white transition-all cursor-pointer"
                  key={category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="py-4 px-6 lg:p-10 flex flex-col gap-y-10 border-y border-white/8">
            <CustomButton
              className="flex items-center gap-x-1 h-10"
              type="secondary"
              href="#"
            >
              <span>Request an Integrations</span>
              <ExternalLinkIcon className="size-5" />
            </CustomButton>
          </div>
        </aside>
        <main className="border-l border-white/8 scroll-smooth grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 lg:p-8">
          {INTEGRATIONS.map(
            ({ category, logo: Logo, title, isBuiltIn }: Integration) => (
              <div
                className="flex flex-col items-start p-4 gap-y-4 bg-white/4 border border-white/8 rounded-[12px]"
                key={title}
              >
                <div className="flex items-start justify-between w-full">
                  <Logo />
                  {isBuiltIn && (
                    <span className="py-0.5 px-1.5 rounded-[6px] bg-[#B8DFF9] handwrite not-italic text-neutral-950">
                      built-in
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="body-text-small-medium">{title}</h4>
                  <p className="body-text-small-medium">{category}</p>
                </div>
              </div>
            ),
          )}
        </main>
      </div>
    </section>
  );
};

export default IntegrationsMain;
