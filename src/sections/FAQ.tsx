'use client';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { FAQ_DATA } from '@/lib/constants';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/FAQSectionAccordion';

export default function FAQ() {
  const [filter, setFilter] = useState<string>('General');

  return (
    <section className='overflow-hidden'>
      <div className="flex flex-col items-start px-4 md:px-[90px] lg:px-[180px] py-6 md:py-8 lg:py-10 border-b border-white/8">
        <h3 className="text-h5 md:text-h4 lg:text-h3 inline-block w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
          Questions, meet <span className="handwrite">answers.</span>
        </h3>
      </div>
      <div className="py-6 px-4 md:py-8 lg:py-10 md:gap-y-6 lg:gap-y-8 flex flex-col gap-y-4 md:px-[90px] lg:px-[180px] relative">
        <div className="w-full h-[563px] -right-3/5 top-1/2 -translate-y-1/2 absolute opacity-70 bg-gradient-to-b from-blue-500/20 to-white/5 rounded-full blur-[150px] -z-5" />
        <div className="flex flex-col">
          <ScrollArea>
            <div className="w-full flex items-center gap-x-2 pb-2">
              {FAQ_DATA.map(({ category }: FAQCategory) => (
                <div
                  key={category}
                  className={twMerge(
                    'rounded-[12px] py-1 px-3 md:py-2 md:px-4 body-text-small-semi-bold cursor-pointer',
                    filter === category
                      ? 'text-neutral-950 bg-white'
                      : 'border border-white/8 text-white',
                  )}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <Accordion type="multiple" className="flex flex-col gap-y-4">
          {FAQ_DATA.filter((item) => item.category === filter)[0].items.map(
            ({ description, title }: FAQItem, index: number) => (
              <AccordionItem
                value={title}
                key={index}
                className="!p-0"
              >
                <AccordionTrigger className="!body-text-large-semi-bold cursor-pointer p-4 md:px-10 md:py-6">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="!body-text-medium-regular text-neutral-500 p-4 md:px-10 md:py-6 !pt-0">
                  {description}
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </div>
    </section>
  );
}
