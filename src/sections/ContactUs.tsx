'use client';

import TestimonialCard from '@/components/TestimonialCard';
import { TESTIMONIALSv2 } from '@/lib/constants';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '@/components/EmblaCarouselDotButton';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import CustomButton from '@/components/CustomButton';

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.email(),
  heard: z.string().min(2).max(50),
  help: z.string().min(10).max(250),
});

export default function ContactUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'keepSnaps',
    slidesToScroll: 1,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      heard: '',
      help: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section>
      <div className="p-4 md:p-8 lg:p-10 flex flex-col gap-y-4 items-center border-b border-white/8 relative overflow-visible">
        <h3 className="text-h5 md:text-h4 lg:text-h3 max-w-[600px] text-center">
          Have a <span className="handwrite">questions?</span>
        </h3>
        <p className="body-text-small-regular text-center max-w-[730px]">
          If you would like to contact us to request a demo, ask a question,
          need support, or anything else, send us an email and we will respond
          as soon as possible.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col w-full gap-y-6 items-center px-4 py-6 md:!p-14 md:!pt-6 lg:!p-20 lg:!pt-6">
          <div className="embla w-full" ref={emblaRef}>
            <div className="embla__container">
              {TESTIMONIALSv2.map((Testimonial: Testimonial) => (
                <div key={Testimonial.name} className="embla__slide px-3">
                  <TestimonialCard
                    className="w-full flex-col-reverse h-full justify-between"
                    Testimonial={Testimonial}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={twMerge(
                  'size-2.5 rounded-full border cursor-pointer',
                  index === selectedIndex
                    ? 'border-white bg-white'
                    : 'border-white/8 bg-white/4',
                )}
              />
            ))}
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="border-l border-white/8"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="flex flex-col pt-3 border-b border-white/8">
                  <FormLabel className="px-6">Full name*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="border-none focus-visible:ring-0 pl-0 px-6 py-3 !bg-transparent focus-visible:!bg-white/4 rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col pt-3 border-b border-white/8">
                  <FormLabel className="px-6">Email*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      className="border-none focus-visible:ring-0 pl-0 px-6 py-3 !bg-transparent focus-visible:!bg-white/4 rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="heard"
              render={({ field }) => (
                <FormItem className="flex flex-col pt-3 border-b border-white/8">
                  <FormLabel className="px-6">
                    How did you hear about us?
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="border-none w-full focus-visible:ring-0 pl-0 px-6 py-3 !bg-transparent focus-visible:!bg-white/4 rounded-none">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="border-white/8 rounded-[12px]">
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="social-media">
                          Social Media
                        </SelectItem>
                        <SelectItem value="referral">
                          Referral from friend/colleague
                        </SelectItem>
                        <SelectItem value="blog">Blog/Article</SelectItem>
                        <SelectItem value="podcast">Podcast</SelectItem>
                        <SelectItem value="conference">
                          Conference/Event
                        </SelectItem>
                        <SelectItem value="advertisement">
                          Advertisement
                        </SelectItem>
                        <SelectItem value="email-marketing">
                          Email Marketing
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="help"
              render={({ field }) => (
                <FormItem className="flex flex-col pt-3 border-b border-white/8">
                  <FormLabel className="px-6">Enter your message...</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="john Doe"
                      className="border-none min-h-[140px] focus-visible:ring-0 pl-0 px-6 py-3 !bg-transparent focus-visible:!bg-white/4 rounded-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end items-center py-4 px-6 md:p-8 lg:p-10">
              <CustomButton type="submit" className="h-8 md:h-12">
                Send Message
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
